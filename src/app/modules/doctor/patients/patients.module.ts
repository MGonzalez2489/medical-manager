import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientListComponent } from './patient-list/patients-list.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';


@NgModule({
  declarations: [PatientListComponent, PatientFormComponent, PatientProfileComponent],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    SharedModule
  ]
})
export class PatientsModule { }
