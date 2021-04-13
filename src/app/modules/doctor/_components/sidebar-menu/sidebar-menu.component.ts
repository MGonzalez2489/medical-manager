import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { GlobalConstants } from 'src/app/common/global-constants';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {

  @Output()
  closeSideBar = new EventEmitter<boolean>();

  icons = {faImage};
  app = GlobalConstants.App;
  constructor() { }

  ngOnInit(): void {
  }
  closeBar(){
    this.closeSideBar.emit(false);
  }

}
