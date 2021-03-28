import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GlobalConstants } from 'src/app/common/global-constants';
import { faBars, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  app = GlobalConstants.App;
  private isOpenedSiebar = false;
  session
  icons = {
    faBars,
    faCart: faShoppingCart,
    faUser: faUserCircle
  };

  @Output()
  openSidebar = new EventEmitter<boolean>();
 // session: Session;
  // constructor(private sessionService: SessionService) {
  //   this.sessionService.getSession().subscribe(session => this.session = session);
  // }

  ngOnInit(): void {
    this.openSidebar.emit(this.isOpenedSiebar);

  }
  openSideBar(): void {
    this.isOpenedSiebar = !this.isOpenedSiebar;
    this.openSidebar.emit(this.isOpenedSiebar);
  }
  logout(): void {
  //  this.sessionService.deleteSession();
  }
}
