import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestManagerService } from 'src/app/app-service/rest-manager.service';
import { Maintenance } from '../../../../behavior/maitenance';
import { REST } from 'src/app/app-service/rest-connections.service';
import { ReservationInterface } from 'src/app/app-interface/reservation-interface';

@Component({
  selector: 'app-reservation-crud',
  templateUrl: './reservation-crud.component.html',
  styleUrls: ['./reservation-crud.component.css']
})
export class ReservationCrudComponent extends Maintenance implements OnInit {

  public myForm: FormGroup = this.fb.group({
    start: ['', [ Validators.required, Validators.maxLength(100)]],
    end: ['', [ Validators.required]],
    parking: ['', [ Validators.required]],
    vehicle: ['', [ Validators.required]],
    status: ['', [ Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    public route: ActivatedRoute,
    private restService: RestManagerService,
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

  disableForm(): void {
    this.myForm.disable();
  }
  fillForm(): void {
    this.restService.getObjectById(REST.service.console, 'reservation', this.currentId.toString()).subscribe(
      (response) => {
        const reservation = (response as ReservationInterface);
        this.myForm.setValue({
          start: reservation.start,
          end: reservation.end,
          parking: reservation.parking.name,
          vehicle : reservation.vehicle.brand + '-' + reservation.vehicle.line+'-'+reservation.vehicle.model+' '+reservation.vehicle.plate,
          status: reservation.status.description
        });
        this.loading = false;
      }, error => {
        this.loading = false;
        console.error(JSON.stringify(error));
      });
  }
  create(): void {
    throw new Error('Method not implemented.');
  }
  update(): void {
    throw new Error('Method not implemented.');
  }
  delete(): void {
    this.loading = true;
    this.restService.deleteObjectById(REST.service.console, 'reservation', this.currentId.toString()).subscribe(
      (response) => {
        const reservation = (response as ReservationInterface);
        this.myForm.setValue({
          start: reservation.start,
          end: reservation.end,
          parking: reservation.parking.name,
          vehicle : reservation.vehicle.brand + '-' + reservation.vehicle.line+'-'+reservation.vehicle.model+' '+reservation.vehicle.plate,
          status: reservation.status.description
        });
        this.loading = false;
        this.router.navigate(['reservation']);
      }, error => {
        this.loading = false;
        console.error(JSON.stringify(error));
      });
  }
  restore(): void {
    throw new Error('Method not implemented.');
  }

}
