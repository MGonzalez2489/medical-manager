import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionService } from '../services';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(private sessionService: SessionService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.sessionService.getSessionToken();

    const authReq = request.clone({
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.sessionService.getSessionToken()
      })
    });

    if (token)
      return next.handle(authReq);
    else
      return next.handle(request);
  }
}
