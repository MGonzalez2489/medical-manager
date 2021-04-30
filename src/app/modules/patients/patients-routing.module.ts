import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { PatientListComponent } from './patient-list/patients-list.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';

const routes: Routes = [
  { path: '', component: PatientListComponent, data: { title: 'Pacientes', isParent: true } },
  { path: 'nuevo', component: PatientFormComponent, data: { title: 'Nuevo Paciente', isParent: false } },
  { path: ':guid/editar', component: PatientFormComponent, data: { title: 'Editar Paciente', isParent: false } },
  { path: ':guid/perfil', component: PatientProfileComponent, data: { title: 'Perfil Paciente', isParent: false } },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
