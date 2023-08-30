import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestManagerService } from 'src/app/app-service/rest-manager.service';
import { Maintenance } from '../../../../behavior/maitenance';
import { REST } from 'src/app/app-service/rest-connections.service';
import { PaymentInterface } from 'src/app/app-interface/payment-interface';

@Component({
  selector: 'app-payment-crud',
  templateUrl: './payment-crud.component.html',
  styleUrls: ['./payment-crud.component.css']
})
export class PaymentCrudComponent extends Maintenance implements OnInit {
  
  public myForm: FormGroup = this.fb.group({
    total: ['', [ Validators.required]],
    reservation: ['', [ Validators.required]],
    status: ['', [ Validators.required]],
    client: ['', [ Validators.required]],
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
    this.initialize();
   }

  ngOnInit(): void {
  }

  disableForm(): void {
    this.myForm.disable();
  }

  fillForm(): void {
    this.restService.getObjectById(REST.service.console, 'payment', this.currentId.toString()).subscribe(
      (response) => {
        const payment = (response as PaymentInterface);
        this.myForm.setValue({
          total: payment.total,
          reservation: payment.reservation,
          status: payment.status.description,
          client: payment.client
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
    throw new Error('Method not implemented.');
  }
  restore(): void {
    throw new Error('Method not implemented.');
  }

}
