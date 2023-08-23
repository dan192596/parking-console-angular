import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestManagerService } from 'src/app/app-service/rest-manager.service';
import { Maintenance } from '../../../../behavior/maitenance';

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
    bankAccount: ['', [ Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    public route: ActivatedRoute,
    private restService: RestManagerService,
  ) {
    super();
    this.title = this.route.snapshot.data['title'];
    this.mode = this.route.snapshot.data['mode'];
    this.initialize();
   }

  ngOnInit(): void {
  }

  disableForm(): void {
    throw new Error('Method not implemented.');
  }
  fillForm(): void {
    throw new Error('Method not implemented.');
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
