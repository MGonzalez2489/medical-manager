import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { GlobalConstants } from 'src/app/common/global-constants';
import { faBars, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { SessionService } from 'src/app/core/services';
import { Session } from 'src/app/core/models';
import { ActivatedRoute, ActivationEnd, Data, Event,Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  app = GlobalConstants.App;
  private isOpenedSiebar = true;
  icons = {
    faBars,
    faCart: faShoppingCart,
    faUser: faUserCircle
  };

  @Output()
  openSidebar = new EventEmitter<boolean>();
  session: Session;
  routerSubscription: Subscription;
  pageData:Data;
  constructor(private sessionService: SessionService, private router: Router, private route: ActivatedRoute) {
    this.sessionService.getSession().subscribe(session => this.session = session);
    this.routerSubscription = this.router.events.subscribe((routerEvent) => {
      this.getRouteData(routerEvent);
    });
  }
  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }
  getRouteData(value: Event) {
    if (value instanceof ActivationEnd) {
      const data = value.snapshot.data;
      if (data && data.page) {
        this.pageData = data;
      }
    }
  }

  ngOnInit(): void {}
  openSideBar(): void {
    this.isOpenedSiebar = !this.isOpenedSiebar;
    this.openSidebar.emit(this.isOpenedSiebar);
  }
  logout(): void {
    this.sessionService.requestLogout();
  }
}
