import { Component, OnInit } from '@angular/core';
import { SideBarModel } from 'src/app/core/models/layout';
import { AppService } from 'src/app/core/services';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  public sidebarOptions = new SideBarModel();
  constructor(private appService: AppService) {

  }
  ngOnDestroy(): void {
    this.appService.resizeSubscription$.unsubscribe();
  }
  ngOnInit(): void {
    this.configureSideBar();
    this.subscribeToAppSize();
  }
  configureSideBar() {
    if (this.appService.app.size.width <= 450)
      this.sidebarOptions.mobileView();
    else
      this.sidebarOptions.desktopView();
  }
  subscribeToAppSize() {
    this.appService.resizeSubscription$ = this.appService.resizeObservable$.subscribe(data => {
      this.appService.setAppSize(data.currentTarget['innerHeight'], data.currentTarget['innerWidth']);
      this.configureSideBar();
    });
  }


}