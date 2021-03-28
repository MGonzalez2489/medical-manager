import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { DoctorsComponent } from './pages/doctors/doctors.component';
import { HomeComponent } from './pages/home/home.component';
import { PatientsComponent } from './pages/patients/patients.component';
import { ReceptionistComponent } from './receptionist.component';

const routes: Routes = [
  {
    path: '',
    component: ReceptionistComponent,
    children: [
      { path: 'dashboard', component: HomeComponent },
      { path: 'pacientes', component: PatientsComponent },
      { path: 'doctores', component: DoctorsComponent },
      { path: 'citas', component: AppointmentsComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceptionistRoutingModule { }
