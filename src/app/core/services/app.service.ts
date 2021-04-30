import { Subscription } from 'rxjs/internal/Subscription';
import { Injectable } from '@angular/core';
import { AppModel, BreadcrumbModel } from '../models/layout';
import { Observable } from 'rxjs/internal/Observable';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { GlobalConstants } from 'src/app/common/global-constants';
import { ActivatedRoute, ActivationEnd, Data, NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  //Suscriptions
  resizeObservable$: Observable<Event>;
  resizeSubscription$: Subscription;


  app = new AppModel();
  pageData: Data;
  breadcrumbs = new Array<BreadcrumbModel>();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.loadRouteData();
    this.resizeObservable$ = fromEvent(window, 'resize');
    this.loadAppGlobals();

  }
  loadRouteData(): void {
    this.router.events.subscribe((routerEvent) => {
      if (routerEvent instanceof ActivationEnd) {
        const data = routerEvent.snapshot.data;
        if (data && !this.isEmptyObject(data)) {
          this.pageData = data;
        }
      }
      else if (routerEvent instanceof NavigationEnd) {
        this.breadcrumbs = this.generateBreadCrumb(this.activatedRoute);
      }
    });
  }


  setAppSize(height: number, width: number): void {
    this.app.size.width = width;
    this.app.size.height = height;
  }
  generateBreadCrumb(route: ActivatedRoute, url: string = '#', bds: BreadcrumbModel[] = []) {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return this.breadcrumbs;
    }

    if (this.pageData.isParent) {
      this.breadcrumbs = new Array<BreadcrumbModel>();
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '') {
        url = `/${routeURL}`;
      }

      const label = child.snapshot.data['title'];
      if (label) {
        const bd = new BreadcrumbModel();
        bd.title = label;
        bd.link = url;
        this.breadcrumbs.push(bd);
      }

      return this.generateBreadCrumb(child, url, bds);
    }


  }
  private loadAppGlobals() {
    this.app.name = GlobalConstants.App.name;
  }
  private isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }
}
