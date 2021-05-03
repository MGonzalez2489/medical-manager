import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { PatientListComponent } from './patient-list/patients-list.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';

const routes: Routes = [
  { path: '', component: PatientListComponent, data: { title: 'Patients', isParent: false } },
  { path: 'new', component: PatientFormComponent, data: { title: 'New Patient', isParent: false } },
  { path: ':guid/edit', component: PatientFormComponent, data: { title: 'Edit Patient', isParent: false } },
  { path: ':guid/profile', component: PatientProfileComponent, data: { title: 'Patient Profile', isParent: false } },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
