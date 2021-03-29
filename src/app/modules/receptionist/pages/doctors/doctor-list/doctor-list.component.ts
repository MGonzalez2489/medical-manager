import { Component, OnInit } from '@angular/core';
import { faEllipsisH} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit {
  icons = {
    faEllipsisH
  }
  page=1;
  constructor() { }

  ngOnInit(): void {
  }

}
