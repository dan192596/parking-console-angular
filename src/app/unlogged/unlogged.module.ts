import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UnloggedLayoutComponent } from './layout/layout.component';
import { UnloggedRoutingModule } from './unlogged-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    UnloggedLayoutComponent
  ],
  imports: [
    CommonModule,
    UnloggedRoutingModule
  ]
})
export class UnloggedModule { }
