import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receptionist',
  templateUrl: './receptionist.component.html',
  styleUrls: ['./receptionist.component.scss']
})
export class ReceptionistComponent implements OnInit {

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
