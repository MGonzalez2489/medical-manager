import { Component, OnInit } from '@angular/core';
import { faEllipsisH, faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
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
  icons = { faEllipsisH, faAngleUp, faAngleDown }
  patients: Array<Patient> = new Array<Patient>();
  constructor(private patientService: PatientService, private sessionService: SessionService) { }

  ngOnInit(): void {
    this.getPatients();
  }
  getPatients() {
    this.patientService.getPatientsByDoctor(this.searchCriteria).subscribe(data => {
      this.patients = data.model;
      this.searchCriteria.totalRecords = data.totalRecords;
    })
  }
  sortBy(term) {
    if (this.searchCriteria.orderBy == term) {
      if (this.searchCriteria.orderDir != 'desc') {
        this.searchCriteria.orderDir = this.searchCriteria.orderBy == term ? 'desc' : 'asc';
        this.searchCriteria.orderBy = term;
      }
      else {
        delete this.searchCriteria.orderDir;
        this.searchCriteria.orderBy = '';
      }
    }
    else{
      this.searchCriteria.orderDir = 'asc';
      this.searchCriteria.orderBy = term;
    }


    this.getPatients();
  }
}
