import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UnloggedLayoutComponent } from './layout/layout.component';
import { UnloggedRoutingModule } from './unlogged-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    LoginComponent,
    UnloggedLayoutComponent
  ],
  imports: [
    CommonModule,
    UnloggedRoutingModule, 
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class UnloggedModule { }
