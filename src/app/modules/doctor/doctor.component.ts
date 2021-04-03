import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  constructor() { }
  sidebarOptions = {
    isOpenedSidebar: true,
    closeOnClickOutside: false,
    mode: '"over"',
    showBackdrop: false
  };

  ngOnInit(): void {
  }
  openSidebar($event): void {
    // this.sidebarOptions.isOpenedSidebar = !this.sidebarOptions.isOpenedSidebar;
  }
  closeBar(): void {
    // this.sidebarOptions.isOpenedSidebar = false;
  }
}
