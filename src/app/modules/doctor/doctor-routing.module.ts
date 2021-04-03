import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorComponent } from './doctor.component';

const routes: Routes = [
  {
    path: '',
    component: DoctorComponent,
    children: [
      { path: 'dashboard', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      { path: 'pacientes', loadChildren: () => import('./patients/patients.module').then(m => m.PatientsModule) },
      { path: 'citas', loadChildren: () => import('./appointments/appointments.module').then(m => m.AppointmentsModule) },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
