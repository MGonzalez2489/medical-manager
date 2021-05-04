import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Patient } from 'src/app/core/models/db';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { EnumService } from 'src/app/core/services';
import { KeyNameModel } from 'src/app/core/models';
import { NgbDateCustomParserFormatter } from 'src/app/shared/formaters';
import { PatientService } from '../services/patient.service';
import { Router } from '@angular/router';


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
  genderList = new Array<KeyNameModel>();
  get pForm() { return this.patientForm.controls; }
  constructor(private formBuilder: FormBuilder,
    private patientService: PatientService,
    private router: Router) { }
  
  ngOnInit(): void {
    this.genderList = EnumService.getGenderArray();
    this.initializeForm();
  }

  initializeForm(): void {
    this.patientForm = this.formBuilder.group({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      birthday: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required]),
      gender: new FormControl(this.genderList[0].name, [Validators.required]),
    });
  }

  submit(): void {
    this.isSubmitted = true;
    if (this.patientForm.valid) {
      const parser = new NgbDateCustomParserFormatter();
      var constForm = Object.assign(Object.create(this.patientForm.value), this.patientForm.value);
      constForm.birthday = parser.formatAPI(constForm.birthday);
      this.patientService.postPatient(constForm).subscribe(data => {
        this.router.navigate(['/patients']);
      })
    }
  }

}
