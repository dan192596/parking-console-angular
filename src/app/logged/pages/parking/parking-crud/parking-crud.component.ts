import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { REST } from 'src/app/app-service/rest-connections.service';
import { RestManagerService } from 'src/app/app-service/rest-manager.service';
import { Maintenance } from 'src/app/behavior/maitenance';
import { ParkingInterface } from '../../../../app-interface/parking-interface';
import { UserService } from 'src/app/app-service/user.service';

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
    private userService: UserService,
    private router: Router
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
    
    this.initialize();
  }

  
  ngOnInit(): void {
  }

  getForm(){
    return {
      location: this.myForm.value['location'],
      latitude: this.myForm.value['latitude'],
      longitude: this.myForm.value['longitude'],
      priceHour: this.myForm.value['priceHour'],
      name: this.myForm.value['name'],
      owner: this.userService.getData()['id']
    }
  }

  create(): void {
    this.loading = true;
    this.restService.insertObject(REST.service.console, 'parking', this.getForm()).subscribe(
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
        this.router.navigate(['parking']);
      }, error => {
        this.loading = false;
        console.error(JSON.stringify(error));
      });
  }

  update(): void {
    this.loading = true;
    this.restService.editObjectById(REST.service.console, 'parking', this.currentId.toString(), this.getForm()).subscribe(
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
        this.router.navigate(['parking']);
      }, error => {
        this.loading = false;
        console.error(JSON.stringify(error));
      });
  }

  delete(): void {
    this.loading = true;
    this.restService.deleteObjectById(REST.service.console, 'parking', this.currentId.toString()).subscribe(
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
        this.router.navigate(['parking']);
      }, error => {
        this.loading = false;
        console.error(JSON.stringify(error));
      });
  }
  restore(): void {
    this.loading = true;
    this.restService.restoreObjectById(REST.service.console, 'parking', this.currentId.toString()).subscribe(
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
        this.router.navigate(['parking']);
      }, error => {
        this.loading = false;
        console.error(JSON.stringify(error));
      });
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
