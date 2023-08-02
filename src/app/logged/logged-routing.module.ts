import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';
import { ParkingComponent } from './pages/parking/parking.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ReservationComponent } from './pages/reservation/reservation.component';

const routes: Routes = [
  { path: 'dashboard', 
    component: DashboardComponent   
  },
  { path: 'documentation', 
    component: DocumentationComponent
  },
  { path: 'parking', 
    component: ParkingComponent
  },
  { path: 'payment', 
    component: PaymentComponent
  },
  { path: 'reservation', 
    component: ReservationComponent
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
