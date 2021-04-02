import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Patient } from 'src/app/core/models/db';
import { ReturnListModel } from 'src/app/core/models/responses';
import { BaseSearchCriteria } from 'src/app/core/models/searchCriteria';
import { RequestService } from 'src/app/core/services';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private requestService: RequestService) { }

  getPatientsByDoctor(searchCriteria: BaseSearchCriteria): Observable<ReturnListModel<Patient>> {
    const url = `doctor/${searchCriteria.guid}/patient`
    return this.requestService.getListWithParams<Patient>(url,searchCriteria);
  }
}
