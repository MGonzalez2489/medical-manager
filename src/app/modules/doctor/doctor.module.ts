import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorComponent } from './doctor.component';
import { AppointmentListComponent } from './pages/appointments/appointment-list/appointment-list.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SidebarModule } from 'ng-sidebar';
import { PatientFormComponent } from './pages/patients/patient-form/patient-form.component';
import { PatientListComponent } from './pages/patients/patient-list/patients-list.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';



@NgModule({
  declarations: [DoctorComponent, AppointmentListComponent, PatientFormComponent, PatientListComponent, HomeComponent , SidebarMenuComponent],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    SharedModule,
    SidebarModule.forRoot()
  ]
})
export class DoctorModule { }
