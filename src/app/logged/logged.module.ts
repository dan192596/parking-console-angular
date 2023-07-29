import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggedLayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoggedRoutingModule } from './logged-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    LoggedLayoutComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule, 
    LoggedRoutingModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class LoggedModule { }
