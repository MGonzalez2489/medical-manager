import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faImage, faHome, faCalendarAlt, faUsers, faUserFriends, faMoneyBill, faQuestionCircle, faInfo, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
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
    this.options.push(new SideBarOptionModel(false, 'home', 'Home', faHome));
    this.options.push(new SideBarOptionModel(false, 'appointments', 'Appointments', faCalendarAlt));
    this.options.push(new SideBarOptionModel(false, 'patients', 'Patients', faUsers));
    this.options.push(new SideBarOptionModel(false, 'receptionist', 'Receptionist', faUserFriends));
    this.options.push(new SideBarOptionModel(false, 'billing', 'Billing', faMoneyBill));
    this.options.push(new SideBarOptionModel(true, '', ''));
    this.options.push(new SideBarOptionModel(false, 'fAQs', 'FAQs', faQuestionCircle));
    this.options.push(new SideBarOptionModel(false, 'fAQs', 'About Us', faInfo));
    this.options.push(new SideBarOptionModel(false, 'fAQs', 'Log Out', faSignOutAlt));

  }

}
