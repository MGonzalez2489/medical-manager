import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from 'src/app/core/models/db';
import { SessionService } from 'src/app/core/services';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.scss']
})
export class PatientProfileComponent implements OnInit {
  patient: Patient = new Patient();
  active = 1;
  constructor(private activatedRoute: ActivatedRoute, private sessionService: SessionService, private patientService: PatientService) { }

  ngOnInit(): void {
    const patientGuid = this.activatedRoute.snapshot.params['guid'];
    this.getPatientByGuid(patientGuid);
  }
  getPatientByGuid(guid: string) {
    const currentUser = this.sessionService.getLoggedInUser();
    this.patientService.getPatientByGuid(currentUser.guid, guid).subscribe(data => {
      if (data.isSuccess) {
        this.patient = data.model
        console.info("PACIENTE",this.patient);
      }
      else {
        console.error("ALGO SALIO MAL", data.message);
      }
    },
      error => {
        console.error("ALGO SALIO MAL", error);
      })
  }

}
