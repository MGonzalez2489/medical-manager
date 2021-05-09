import { Component, Input, OnInit } from '@angular/core';
import { Appointment, Patient } from 'src/app/core/models/db';
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { AppService, RequestService, SessionService } from 'src/app/core/services';
import { BaseSearchCriteria } from 'src/app/core/models/searchCriteria';
import { NgbDateCustomParserFormatter } from 'src/app/shared/formaters';
import { format } from 'date-fns';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap/';


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
    private session: SessionService,
    public activeModal: NgbActiveModal) {
  }

  initializeForm() {
    this.appointment.duration = this.appService.app.appointment.defaultTimeDuration;
    this.generateApptTimePeriodsHour();
    if (!this.appointment.startDate) {
      const current = new Date();
      this.minDate = {
        year: current.getFullYear(),
        month: current.getMonth() + 1,
        day: current.getDate()
      };
    }


    const sessionUser = this.session.getLoggedInUser();
    this.appointment.doctor = sessionUser.guid;
    if (!this.appointment.startTime) {
      this.appointment.startTime = this.availableTime[0];
    }
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

    newAppt.startDate = format(this.generateStartDateTime(newAppt.startDate, this.appointment.startTime), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")

    this.rService.postWithModel('appointment', newAppt).subscribe(data => {
      this.activeModal.close(true);
    }, error => {
      console.log("ERROR RESPONSE", error);
    });

  }
  cancel() { }
  generateApptTimePeriodsHour() {
    this.availableTime = [];
    let startTime = 8 * 60;
    var ap = ['AM', 'PM'];
    for (var i = 0; startTime < 24 * 60; i++) {
      const hh = Math.floor(startTime / 60);
      var mm = (startTime % 60);
      const newTime = ("" + ((hh == 12) ? 12 : hh % 12)).slice(-2) + ':' + ("0" + mm).slice(-2) + ' ' + ap[Math.floor(hh / 12)]; //("0" + (hh % 12)).slice(-2) + ':' + ("0" + mm).slice(-2) + ap[Math.floor(hh / 12)]; // pushing data in array in [00:00 - 12:00 AM/PM format]
      this.availableTime.push(newTime);
      startTime = startTime + Number(this.appointment.duration);
    }
  }
  generateStartDateTime(date: string, time: string) {
    const isAM = time.includes('AM');
    time = time.replace('AM', '').replace('PM', '');
    const valueArray = time.split(':');
    const hh = isAM ? (valueArray[0].length == 1 ? '0' + valueArray[0] : valueArray[0]) : Number(valueArray[0]) + 12;
    const mm = valueArray[1];
    const result = hh + ':' + mm;
    const dResult = new Date(date + ' ' + result.toString());
    return dResult;
  }

  //function called from outside
  setDateFromSource(date) {
    const dateObj = new Date(date);
    const day = dateObj.getDate();
    this.appointment.startDateNg = {
      year: dateObj.getFullYear(),
      month: dateObj.getMonth() + 1,
      day: day
    }
    this.appointment.startTime = dateObj.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }).toString();
  }
}
