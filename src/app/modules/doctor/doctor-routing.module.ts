import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorComponent } from './doctor.component';
import { AppointmentListComponent } from './pages/appointments/appointment-list/appointment-list.component';
import { HomeComponent } from './pages/home/home.component';
import { PatientFormComponent } from './pages/patients/patient-form/patient-form.component';
import { PatientListComponent } from './pages/patients/patient-list/patients-list.component';

const routes: Routes = [
  {
    path: '',
    component: DoctorComponent,
    children: [
      { path: 'dashboard', component: HomeComponent },
      { path: 'pacientes', component: PatientListComponent },
      { path: 'pacientes/nuevo', component: PatientFormComponent },
      { path: 'pacientes/:guid', component: PatientFormComponent },
      { path: 'citas', component: AppointmentListComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
