import { Component, OnInit } from '@angular/core';
import { faEllipsisH} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
  icons = {
    faEllipsisH
  }
  page = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
