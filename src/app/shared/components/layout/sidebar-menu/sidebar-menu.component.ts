import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { SideBarOptionModel } from 'src/app/core/models/layout';
import { AppService } from 'src/app/core/services';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
})
export class SidebarMenuComponent implements OnInit {
  @Output()
  clickedOption = new EventEmitter<boolean>();

  icons = { faImage };
  options = new Array<SideBarOptionModel>();

  constructor(public appService: AppService) { }

  ngOnInit(): void {
    this.generateOptions();
  }
  closeBar() {
    this.clickedOption.emit(false);
  }
  private generateOptions() {
    this.options.push(new SideBarOptionModel(false, '', 'Home', ''));
    this.options.push(new SideBarOptionModel(false, 'appointments', 'Appointments', ''));
    this.options.push(new SideBarOptionModel(false, 'patients', 'Patients', ''));
    this.options.push(new SideBarOptionModel(false, 'receptionist', 'Receptionist', ''));
    this.options.push(new SideBarOptionModel(false, 'billing', 'Billing', ''));
    this.options.push(new SideBarOptionModel(true, '', '', ''));
    this.options.push(new SideBarOptionModel(false, 'fAQs', 'FAQs', ''));
    this.options.push(new SideBarOptionModel(false, 'fAQs', 'About Us', ''));
    this.options.push(new SideBarOptionModel(false, 'fAQs', 'Log Out', ''));

  }

}
