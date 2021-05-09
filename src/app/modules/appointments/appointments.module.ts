import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentsRoutingModule } from './appointments-routing.module';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CalendarComponent } from './components/calendar/calendar.component';



@NgModule({
  declarations: [AppointmentListComponent, CalendarComponent],
  imports: [
    CommonModule,
    AppointmentsRoutingModule,
    SharedModule
  ],
 
})
export class AppointmentsModule { }
