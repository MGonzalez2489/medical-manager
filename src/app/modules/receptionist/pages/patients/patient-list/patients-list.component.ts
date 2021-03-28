import { Component, OnInit } from '@angular/core';
import { faEllipsisH} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss']
})
export class PatientListComponent implements OnInit {
  icons = {
    faEllipsisH
  }
  page = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
