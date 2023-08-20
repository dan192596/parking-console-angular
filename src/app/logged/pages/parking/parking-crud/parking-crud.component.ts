import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { REST } from 'src/app/app-service/rest-connections.service';
import { RestManagerService } from 'src/app/app-service/rest-manager.service';
import { Maintenance } from 'src/app/behavior/maitenance';
import { ParkingInterface } from '../../../../app-interface/parking-interface';

@Component({
  selector: 'app-parking-crud',
  templateUrl: './parking-crud.component.html',
  styleUrls: ['./parking-crud.component.css']
})
export class ParkingCrudComponent extends Maintenance implements OnInit{

  public myForm: FormGroup = this.fb.group({
    location: ['', [ Validators.required, Validators.maxLength(100)]],
    latitude: ['', [ Validators.required]],
    longitude: ['', [ Validators.required]],
    priceHour: ['', [ Validators.required]],
    name: ['', [ Validators.required]],
    status: ['']
  });

  constructor(
    private fb: FormBuilder,
    public route: ActivatedRoute,
    private restService: RestManagerService,
  ) {    
    super();
    this.title = this.route.snapshot.data['title'];
    this.mode = this.route.snapshot.data['mode'];

    if (this.mode !== 'create') {
      this.route.queryParams
        .subscribe(profile => {          
            this.currentId = profile['id'];          
        }
      );
    }
    console.log("El currentId es"+this.currentId)
    this.initialize();
  }

  
  ngOnInit(): void {
  }

  create(): void {
    console.log("Soy crear");
  }
  update(): void {
    console.log("Soy actualizar");
  }
  delete(): void {
    console.log("Soy borrar");
  }
  restore(): void {
    console.log("Soy restaurar");
  }
  
  disableForm(): void {
    this.myForm.disable();
  }
  

  fillForm(): void{
    this.restService.getObjectById(REST.service.console, 'parking', this.currentId.toString()).subscribe(
      (response) => {
        const parking = (response as ParkingInterface);
        this.myForm.setValue({
          location: parking.location,
          latitude: parking.latitude,
          longitude: parking.longitude,
          priceHour : parking.priceHour,
          status: parking.status.description,
          name: parking.name
        });
        this.loading = false;
      }, error => {
        this.loading = false;
        console.error(JSON.stringify(error));
      });
  }
}
