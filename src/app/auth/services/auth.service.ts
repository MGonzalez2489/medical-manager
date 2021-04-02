import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Session } from 'src/app/core/models';
import { ReturnModel } from 'src/app/core/models/responses';
import { RequestService } from 'src/app/core/services';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private requestService: RequestService) { }

  postLogin(login: { email: string, password: string, rememberMe: boolean }): Observable<ReturnModel<Session>> {
    return this.requestService.post<Session>(`auth?email=${login.email}&password=${login.password}&rememberMe=${login.rememberMe}`, null);
  }
}
