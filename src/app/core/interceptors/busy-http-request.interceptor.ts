import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingSpinnerService } from 'src/app/core/modules/loading-spinner/loading-spinner.service';
import { tap } from 'rxjs/internal/operators/tap';

@Injectable()
export class BusyHttpRequestInterceptor implements HttpInterceptor {

  constructor(private spinnerService: LoadingSpinnerService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   // start our loader here
   this.spinnerService.show();
   return next.handle(request).pipe(
     tap((event: HttpEvent<any>) => {
       // if the event is for http response
       if (event instanceof HttpResponse) {
         // stop our loader here
         this.spinnerService.hide();
       }
     }, (err: any) => {
       // if any error (not for just HttpResponse) we stop our loader bar
       this.spinnerService.hide();
     }));
  }
}
