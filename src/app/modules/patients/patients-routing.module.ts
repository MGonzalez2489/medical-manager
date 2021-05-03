import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { PatientListComponent } from './patient-list/patients-list.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';

const routes: Routes = [
  { path: '', component: PatientListComponent, data: { title: 'patients.title_plural.title' } },
  { path: 'new', component: PatientFormComponent, data: { title: 'patients.new_patient.title' } },
  { path: ':guid/edit', component: PatientFormComponent, data: { title: 'patients.edit_patient.title' } },
  { path: ':guid/profile', component: PatientProfileComponent, data: { title: 'patients.profile_patient.title' } },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
