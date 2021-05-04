import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Appointment, Patient } from 'src/app/core/models/db';
import { NgbDateCustomParserFormatter } from 'src/app/shared/formaters';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { AppService } from 'src/app/core/services';
import { PatientService } from '../services/patient.service';
import { BaseSearchCriteria } from 'src/app/core/models/searchCriteria';
import { Observable } from 'rxjs/internal/Observable';
import { ReturnListModel } from 'src/app/core/models/responses';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss']
})
export class AppointmentFormComponent implements OnInit {

  @Input()
  patient: Patient;

  patientSearchCriteria = new BaseSearchCriteria();
  patients: Array<Patient> = new Array<Patient>();
  
  appointment: Appointment;
  appointmentForm: FormGroup;
  isSubmitted: boolean;
  constructor(private formBuilder: FormBuilder, private appService: AppService, private patientService: PatientService) { }
  get pForm() { return this.appointmentForm.controls; }
  icons = {
    faCalendar
  };
  ngOnInit(): void {
    this.initializeForm();
    this.getPatients();
  }
  initializeForm(): void{
      this.appointmentForm = this.formBuilder.group({
        startDate: new FormControl(null,[Validators.required]),
        patient: new FormControl(null,[Validators.required]),
        duration: new FormControl(this.appService.app.appointment.defaultTimeDuration,[Validators.required])
      });
  }
  submit():void{
    this.isSubmitted = true;
    if(this.appointmentForm.valid){
      const parser = new NgbDateCustomParserFormatter();
      var constForm = Object.assign(Object.create(this.appointmentForm.value), this.appointmentForm.value);
      constForm.startDate = parser.formatAPI(constForm.startDate);
      console.log("SUBMIT DATA>",constForm);
    }
  }
  getPatients(value:string = null) {
    this.patientSearchCriteria.keyword = value;
    if(!this.patientSearchCriteria.keyword || this.patientSearchCriteria.keyword.length % 3 == 0){
    this.patientService.getPatientsByDoctor(this.patientSearchCriteria).subscribe(data => {
      this.patients = data.model;
      this.patientSearchCriteria.totalRecords = data.totalRecords;
    })
  }
  }

}
