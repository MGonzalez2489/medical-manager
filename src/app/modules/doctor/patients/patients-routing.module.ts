import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { PatientListComponent } from './patient-list/patients-list.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';

const routes: Routes = [
  { path: '', component: PatientListComponent, data: { page: 'Pacientes' } },
  { path: 'nuevo', component: PatientFormComponent, data: { page: 'Nuevo Paciente' } },
  { path: ':guid/editar', component: PatientFormComponent, data: { page: 'Editar Paciente' } },
  { path: ':guid/perfil', component: PatientProfileComponent, data: { page: 'Perfil Paciente' } },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
