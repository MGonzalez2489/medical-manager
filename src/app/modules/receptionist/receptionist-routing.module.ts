import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentListComponent } from './pages/appointments/appointment-list/appointment-list.component';
import { DoctorFormComponent } from './pages/doctors/doctor-form/doctor-form.component';
import { DoctorListComponent } from './pages/doctors/doctor-list/doctor-list.component';
import { HomeComponent } from './pages/home/home.component';
import { PatientFormComponent } from './pages/patients/patient-form/patient-form.component';
import { PatientListComponent } from './pages/patients/patient-list/patients-list.component';
import { ReceptionistComponent } from './receptionist.component';

const routes: Routes = [
  {
    path: '',
    component: ReceptionistComponent,
    children: [
      { path: 'dashboard', component: HomeComponent },
      { path: 'pacientes', component: PatientListComponent },
      { path: 'pacientes/nuevo', component: PatientFormComponent },
      { path: 'pacientes/:guid', component: PatientFormComponent },
      { path: 'doctores', component: DoctorListComponent },
      { path: 'doctores/nuevo', component: DoctorFormComponent },
      { path: 'doctores/:guid', component: DoctorFormComponent },
      { path: 'citas', component: AppointmentListComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceptionistRoutingModule { }
