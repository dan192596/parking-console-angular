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
import { ParkingCrudComponent } from './pages/parking/parking-crud/parking-crud.component';
import { PaymentCrudComponent } from './pages/payment/payment-crud/payment-crud.component';
import { ReservationCrudComponent } from './pages/reservation/reservation-crud/reservation-crud.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    LoggedLayoutComponent,
    DashboardComponent,
    ParkingComponent,
    ReservationComponent,
    PaymentComponent,
    DocumentationComponent,
    ParkingCrudComponent,
    PaymentCrudComponent,
    ReservationCrudComponent
  ],
  imports: [
    CommonModule, 
    LoggedRoutingModule,
    ReactiveFormsModule,
    MatIconModule, 
    MatMenuModule,
    MatTableModule, 
    MatExpansionModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule, 
    MatInputModule, 
    MatPaginatorModule,
    MatCardModule, 
    MatProgressBarModule,
    MatButtonModule
  ]
})
export class LoggedModule { }
