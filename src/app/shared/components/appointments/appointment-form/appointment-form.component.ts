import { Component, Input, OnInit } from '@angular/core';
import { Patient } from 'src/app/core/models/db';
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { Observable } from 'rxjs/internal/Observable';
import { RequestService } from 'src/app/core/services';
import { BaseSearchCriteria } from 'src/app/core/models/searchCriteria';
import { map } from 'rxjs/internal/operators/map';
import { ReturnListModel } from 'src/app/core/models/responses';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss']
})
export class AppointmentFormComponent implements OnInit {

  @Input()
  patient: Patient;

  patients: Patient[];
  patientSearchCriteira = new BaseSearchCriteria();
  icons = {
    faCalendar
  };

  constructor(private rService: RequestService) { }

  ngOnInit(): void {
    this.getPatients();
  }
  getPatients(term = null) {
    if (term) {
      this.patientSearchCriteira.keyword = term;
      this.rService.getListWithParams<Patient>('patient', this.patientSearchCriteira).subscribe(data => {
        this.patients = data.model;
      });
    }
  }

}
