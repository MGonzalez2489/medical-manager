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
    this.options.push(new SideBarOptionModel(false, 'home', 'sidebar.home.title', faHome));
    this.options.push(new SideBarOptionModel(false, 'appointments', 'sidebar.appointments.title', faCalendarAlt));
    this.options.push(new SideBarOptionModel(false, 'patients', 'sidebar.patients.title', faUsers));
    this.options.push(new SideBarOptionModel(false, 'receptionist', 'sidebar.receptionist.title', faUserFriends));
    this.options.push(new SideBarOptionModel(false, 'billing', 'sidebar.billing.title', faMoneyBill));
    this.options.push(new SideBarOptionModel(true, '', ''));
    this.options.push(new SideBarOptionModel(false, 'fAQs', 'sidebar.faqs.title', faQuestionCircle));
    this.options.push(new SideBarOptionModel(false, 'fAQs', 'sidebar.aboutus.title', faInfo));
    this.options.push(new SideBarOptionModel(false, 'fAQs', 'sidebar.logout.title', faSignOutAlt));

  }

}
