import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Patient } from 'src/app/core/models/db';
import {faCalendar} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss']
})
export class PatientFormComponent implements OnInit {
  patient: Patient;
  patientForm: FormGroup;
  isSubmitted: boolean;
  icons = {
    faCalendar
  };
  constructor(private formBuilder: FormBuilder) { }
  get pForm() { return this.patientForm.controls; }
  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.patientForm = this.formBuilder.group({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      birthday: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
    });
  }

  submit(): void {
    this.isSubmitted = true;
  }

}
