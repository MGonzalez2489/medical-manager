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
  availableTime: string[] = [];

  meridian = true;
  constructor(
    private rService: RequestService,
    private appService: AppService,
    private session: SessionService) {
  }

  initializeForm() {
    // this.appointment.startTimeNg = { hour: 13, minute: 30, second: 0 };

    const current = new Date();
    this.minDate = {
      year: current.getFullYear(),
      month: current.getMonth() + 1,
      day: current.getDate()
    };
    this.appointment.duration = this.appService.app.appointment.defaultTimeDuration;
    this.generateApptTimePeriodsHour();
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
    newAppt.duration = Number(this.appointment.duration);
    newAppt.patient = this.appointment.patient;
    newAppt.startDate = parser.formatAPI(this.appointment.startDateNg);
    //newAppt.startTime = parser.formatTimeAPI(this.appointment.startTimeNg);
    console.log("NEW APPT", newAppt);

    this.rService.postWithModel('appointment', newAppt).subscribe(data => {
      console.log("DATA RESPONSE", data);
    }, error => {
      console.log("ERROR RESPONSE", error);
    });

  }
  cancel() { }
  generateApptTimePeriodsHour() {
    this.availableTime = [];
    let startTime = 8 * 60;
    var ap = ['AM', 'PM'];
    for (let i = 0; startTime <= (24 * 60) - (this.appointment.duration); i++) {
      const hh = Math.floor(startTime / 60);
      var mm = (startTime % 60);
      const newTime = ("" + ((hh == 12) ? 12 : hh % 12)).slice(-2) + ':' + ("0" + mm).slice(-2) + ap[Math.floor(hh / 12)]; //("0" + (hh % 12)).slice(-2) + ':' + ("0" + mm).slice(-2) + ap[Math.floor(hh / 12)]; // pushing data in array in [00:00 - 12:00 AM/PM format]
      this.availableTime.push(newTime);
      startTime = startTime + this.appointment.duration;
    }
  }
}
