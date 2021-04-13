import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {
  resizeObservable$: Observable<Event>;
  resizeSubscription$: Subscription;
  appSize = {
    width: 0,
    height: 0
  }
  sidebarOptions = {
    isOpenedSidebar: true,
    closeOnClickOutside: false,
    mode: '"over"',
    showBackdrop: false
  };

  constructor() { }
  

  ngOnInit(): void {
    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe(evt => {

      this.appSize.width = evt.currentTarget['innerWidth'];
      this.appSize.height = evt.currentTarget['innerHeight'];
      this.configSideBar();
    });
    this.appSize.height = window.innerHeight;
    this.appSize.width = window.innerWidth;
    this.configSideBar();
  }
 
  ngOnDestroy(): void {
    this.resizeSubscription$.unsubscribe()
  }

  openSidebar($event): void {
      this.sidebarOptions.isOpenedSidebar = !this.sidebarOptions.isOpenedSidebar;
  }
  closeBar(): void {
    console.log("ENTRO");
    this.sidebarOptions.isOpenedSidebar = false;
  }
  selectedMenuOption(){
    console.log("AAA")
    if(this.appSize.width <= 375){
      this.closeBar();
    }
  }

  configSideBar() {
    if (this.appSize.width <= 375) {
      this.closeBar();
      this.sidebarOptions.mode = '"over"';
      this.sidebarOptions.showBackdrop = true;
      this.sidebarOptions.closeOnClickOutside = true;
    }
    else {
      this.openSidebar(true);
      this.sidebarOptions.showBackdrop = false;
    }
  }

}
