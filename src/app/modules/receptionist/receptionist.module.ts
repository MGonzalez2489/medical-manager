import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceptionistRoutingModule } from './receptionist-routing.module';
import { ReceptionistComponent } from './receptionist.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SidebarModule } from 'ng-sidebar';
import { HomeComponent } from './pages/home/home.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { DoctorListComponent } from './pages/doctors/doctor-list/doctor-list.component';
import { AppointmentListComponent } from './pages/appointments/appointment-list/appointment-list.component';
import { PatientListComponent } from './pages/patients/patient-list/patients-list.component';
import { PatientFormComponent } from './pages/patients/patient-form/patient-form.component';
import { DoctorFormComponent } from './pages/doctors/doctor-form/doctor-form.component';



@NgModule({
  declarations: [ReceptionistComponent, HomeComponent, SidebarMenuComponent, PatientListComponent, DoctorListComponent, AppointmentListComponent, PatientFormComponent, DoctorFormComponent],
  imports: [
    CommonModule,
    ReceptionistRoutingModule,
    SharedModule,
    SidebarModule.forRoot()
  ]
})
export class ReceptionistModule { }
