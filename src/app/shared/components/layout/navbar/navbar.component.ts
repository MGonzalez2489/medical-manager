import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { GlobalConstants } from 'src/app/common/global-constants';
import { faBars, faCog } from '@fortawesome/free-solid-svg-icons';
import { faBell, faUserCircle, faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { AppService, SessionService } from 'src/app/core/services';
import { Session } from 'src/app/core/models';
import { ActivatedRoute, ActivationEnd, Data, Event, Router, } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {


  icons = {
    faBars,
    faBell,
    faUser: faUserCircle,
    faQuestionCircle,
    faCog
  };

  @Output()
  openSidebar = new EventEmitter<boolean>();
  session: Session;


  constructor(
    private sessionService: SessionService,
    public appService: AppService) {
    this.sessionService.getSession().subscribe((session) => (this.session = session));

  }
  ngOnInit(): void { }
  openSideBar(): void {
    this.openSidebar.emit(true);
  }
  logout(): void {
    this.sessionService.requestLogout();
  }
}
