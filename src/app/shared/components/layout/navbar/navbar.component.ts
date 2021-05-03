import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faBars, faCog } from '@fortawesome/free-solid-svg-icons';
import { faBell, faUserCircle, faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { AppService, EnumService, SessionService } from 'src/app/core/services';
import { KeyNameModel, Session } from 'src/app/core/models';

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

  languages = new Array<KeyNameModel>();
  selectedLanguage = new KeyNameModel();

  constructor(
    private sessionService: SessionService,
    public appService: AppService,
  ) {
    this.sessionService.getSession().subscribe((session) => (this.session = session));

  }
  ngOnInit(): void {
    this.languages = EnumService.GetLanguajes();
    this.selectedLanguage = this.languages[0];
  }
  openSideBar(): void {
    this.openSidebar.emit(true);
  }
  logout(): void {
    this.sessionService.requestLogout();
  }
  changeLanguaje(newValue: KeyNameModel) {
    this.appService.setLanguaje(newValue);
    this.selectedLanguage = newValue;
  }
}
