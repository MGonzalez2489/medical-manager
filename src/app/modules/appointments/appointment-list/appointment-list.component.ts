import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {
  icons = {
    faEllipsisH
  };
  page = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
