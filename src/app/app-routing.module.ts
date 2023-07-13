import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardUnloggedService } from './app-security/auth-unlogged.service';
import { AuthGuardLoggedService } from './app-security/auth-logged.service';
import { UnloggedLayoutComponent } from './unlogged/layout/layout.component';
import { LoggedLayoutComponent } from './logged/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: UnloggedLayoutComponent,
    canActivate: [AuthGuardUnloggedService],
    loadChildren: () => import('./unlogged/unlogged.module').then(m => m.UnloggedModule)
  },
  {
    path: '',
    component: LoggedLayoutComponent,
    canActivate: [AuthGuardLoggedService],
    loadChildren: () => import('./logged/logged.module').then(m => m.LoggedModule),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
