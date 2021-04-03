import { Component, OnInit } from '@angular/core';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { Patient } from 'src/app/core/models/db';
import { BaseSearchCriteria } from 'src/app/core/models/searchCriteria';
import { SessionService } from 'src/app/core/services';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss']
})
export class PatientListComponent implements OnInit {
  searchCriteria = new BaseSearchCriteria();
  icons = { faEllipsisH }
  patients: Array<Patient> = new Array<Patient>();
  constructor(private patientService: PatientService, private sessionService: SessionService) { }

  ngOnInit(): void {
    this.searchCriteria.guid = this.sessionService.getLoggedInUser().guid;
    this.getPatients();
  }
  getPatients() {
    this.patientService.getPatientsByDoctor(this.searchCriteria).subscribe(data => {
      this.patients = data.model;
      this.searchCriteria.totalRecords = data.totalRecords;
    })
  }
}
