import { Component, Input, OnInit } from '@angular/core';
import { Appointment, Patient } from 'src/app/core/models/db';
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { AppService, RequestService, SessionService } from 'src/app/core/services';
import { BaseSearchCriteria } from 'src/app/core/models/searchCriteria';
import { KeyNameModel } from 'src/app/core/models';
import { NgbDateCustomParserFormatter } from 'src/app/shared/formaters';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss']
})
export class AppointmentFormComponent implements OnInit {

  @Input()
  patient: Patient;

  patients: Patient[];
  appointment = new Appointment();
  minDate;
  patientSearchCriteira = new BaseSearchCriteria();
  icons = {
    faCalendar
  };
  meridian = true;
  constructor(
    private rService: RequestService,
    private appService: AppService,
    private session: SessionService) {
  }

  initializeForm() {
    this.appointment.startTimeNg = { hour: 13, minute: 30, second: 0 };
    const current = new Date();
    this.minDate = {
      year: current.getFullYear(),
      month: current.getMonth() + 1,
      day: current.getDate()
    };
    this.appointment.duration = this.appService.app.appointment.defaultTimeDuration;

    const sessionUser = this.session.getLoggedInUser();
    this.appointment.doctor = sessionUser.guid;

    if (this.patient) {
      this.appointment.patient = this.patient.guid;
    }
  }

  ngOnInit(): void {
    const patientName = this.patient ? this.patient.firstName : null;
    this.getPatients({ term: patientName });
    this.initializeForm();
  }
  getPatients($event) {
    if ($event && $event.term && $event.term.length >= 2) {
      this.patientSearchCriteira.keyword = $event.term;
      this.rService.getListWithParams<Patient>('patient', this.patientSearchCriteira).subscribe(data => {
        this.patients = data.model;
      });
    }
  }
  submit() {
    const parser = new NgbDateCustomParserFormatter();
    const newAppt = new Appointment();
    newAppt.doctor = this.appointment.doctor;
    newAppt.duration = this.appointment.duration;
    newAppt.patient = this.appointment.patient;
    newAppt.startDate = parser.formatAPI(this.appointment.startDateNg);
    newAppt.startTime = parser.formatTimeAPI(this.appointment.startTimeNg);
    console.log("NEW APPT", newAppt);

    this.rService.postWithModel('appointment', newAppt).subscribe(data => {
      console.log("DATA RESPONSE", data);
    }, error => {
      console.log("ERROR RESPONSE", error);
    });

  }
  cancel() { }

}
