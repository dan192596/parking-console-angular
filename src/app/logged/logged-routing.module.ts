import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';
import { ParkingComponent } from './pages/parking/parking.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { ParkingCrudComponent } from './pages/parking/parking-crud/parking-crud.component';
import { PaymentCrudComponent } from './pages/payment/payment-crud/payment-crud.component';
import { ReservationCrudComponent } from './pages/reservation/reservation-crud/reservation-crud.component';

const routes: Routes = [
  { path: 'dashboard', 
    component: DashboardComponent   
  },
  { path: 'documentation', 
    component: DocumentationComponent
  },
  { path: 'parking',     
    children: [
      {
        path: '',
        component: ParkingComponent,
        data: { title: 'Listar', mode: 'list' }
      },
      {
        path: 'create',
        component: ParkingCrudComponent,
        data: { title: 'Parqueo', mode: 'create' }
      },
      {
        path: 'update',
        component: ParkingCrudComponent,
        data: { title: 'Parqueo', mode: 'update' }
      },
      {
        path: 'delete',
        component: ParkingCrudComponent,
        data: { title: 'Parqueo', mode: 'delete' }
      },
      {
        path: 'restore',
        component: ParkingCrudComponent,
        data: { title: 'Parqueo', mode: 'restore' }
      },
      {
        path: 'detail',
        component: ParkingCrudComponent,
        data: { title: 'Parqueo', mode: 'read' }
      }
    ]
  },
  { path: 'payment',
    children: [
      {
        path: '',
        component: PaymentComponent,
        data: { title: 'Listar', mode: 'list' }
      },
      {
        path: 'create',
        component: PaymentCrudComponent,
        data: { title: 'Crear', mode: 'create' }
      },
      {
        path: 'update',
        component: PaymentCrudComponent,
        data: { title: 'Editar', mode: 'update' }
      },
      {
        path: 'delete',
        component: PaymentCrudComponent,
        data: { title: 'Desactivar', mode: 'delete' }
      },
      {
        path: 'restore',
        component: PaymentCrudComponent,
        data: { title: 'Restaurar', mode: 'restore' }
      },
      {
        path: 'detail',
        component: PaymentCrudComponent,
        data: { title: 'Detalle', mode: 'read' }
      }
    ]
  },
  { path: 'reservation',
    children: [
      {
        path: '',
        component: ReservationComponent,
        data: { title: 'Listar', mode: 'list' }
      },
      {
        path: 'create',
        component: ReservationCrudComponent,
        data: { title: 'Crear', mode: 'create' }
      },
      {
        path: 'update',
        component: ReservationCrudComponent,
        data: { title: 'Editar', mode: 'update' }
      },
      {
        path: 'delete',
        component: ReservationCrudComponent,
        data: { title: 'Desactivar', mode: 'delete' }
      },
      {
        path: 'restore',
        component: ReservationCrudComponent,
        data: { title: 'Restaurar', mode: 'restore' }
      },
      {
        path: 'detail',
        component: ReservationCrudComponent,
        data: { title: 'Detalle', mode: 'read' }
      }
    ]
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LoggedRoutingModule { }
