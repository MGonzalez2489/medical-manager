import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceptionistRoutingModule } from './receptionist-routing.module';
import { ReceptionistComponent } from './receptionist.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SidebarModule } from 'ng-sidebar';
import { HomeComponent } from './pages/home/home.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { PatientsComponent } from './pages/patients/patients.component';
import { DoctorsComponent } from './pages/doctors/doctors.component';
import { AppointmentsComponent } from './pages/appointments/appointments.component';



@NgModule({
  declarations: [ReceptionistComponent, HomeComponent, SidebarMenuComponent, PatientsComponent, DoctorsComponent, AppointmentsComponent],
  imports: [
    CommonModule,
    ReceptionistRoutingModule,
    SharedModule,
    SidebarModule.forRoot()
  ]
})
export class ReceptionistModule { }
