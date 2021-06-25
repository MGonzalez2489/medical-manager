import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  BreadcrumbComponent,
  NavbarComponent,
  PageComponent,
  PageHeaderComponent,
  SidebarMenuComponent
} from './components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StopPropagationDirective } from './directives/stop-propagation.directive';
import { AgePipe, PhonePipe } from './pipes';
import { GenderPipe } from './pipes/gender.pipe';
import { SidebarModule } from 'ng-sidebar';
import { TranslateModule } from '@ngx-translate/core';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppointmentFormComponent } from './components/appointments/appointment-form/appointment-form.component';

@NgModule({
  declarations: [
    NavbarComponent,
    StopPropagationDirective,
    PhonePipe,
    AgePipe,
    GenderPipe,
    SidebarMenuComponent,
    BreadcrumbComponent,
    PageHeaderComponent,
    PageComponent,
    AppointmentFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule,
    NgbModule,
    SidebarModule.forRoot(),
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    TranslateModule,
    NgSelectModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PageComponent,
    FontAwesomeModule,
    RouterModule,
    NgbModule,
    StopPropagationDirective,
    PhonePipe,
    AgePipe,
    GenderPipe,
    TranslateModule,
    CalendarModule,
    NgSelectModule,
    AppointmentFormComponent,
  ],
  providers: [
    NgbActiveModal
  ]
})
export class SharedModule { }

