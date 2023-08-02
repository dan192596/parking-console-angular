import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggedLayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoggedRoutingModule } from './logged-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ParkingComponent } from './pages/parking/parking.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    LoggedLayoutComponent,
    DashboardComponent,
    ParkingComponent,
    ReservationComponent,
    PaymentComponent,
    DocumentationComponent
  ],
  imports: [
    CommonModule, 
    LoggedRoutingModule,
    ReactiveFormsModule,
    MatIconModule, 
    MatTableModule, 
    MatExpansionModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule, 
    MatInputModule, 
    MatPaginatorModule
  ]
})
export class LoggedModule { }
