import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Session } from '../models';
import { User } from '../models/db/User';
import { RequestService } from './request.service';


@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private currentSession: BehaviorSubject<Session> = new BehaviorSubject<Session>(null);
  private SESSION_KEY = 'session';

  constructor(private requestService: RequestService, private router: Router) {
    this.getSession();
  }

  storeSession(newSession: Session): void {
    localStorage.setItem(this.SESSION_KEY, JSON.stringify(newSession));
  }

  setSession(newSession: Session): void {
    this.currentSession.next(newSession);
    this.storeSession(newSession);
  }
  initSession() {
    localStorage.removeItem(this.SESSION_KEY);
  }
  deleteSession(): void {
    this.currentSession.complete();
    localStorage.removeItem(this.SESSION_KEY);
    this.router.navigate(['/auth/login']);
  }
  getSession(): Observable<Session> {
    if (!this.currentSession.value) {
      const storageSession = localStorage.getItem(this.SESSION_KEY);
      if (storageSession) {
        this.setSession(JSON.parse(localStorage.getItem(this.SESSION_KEY)));
      }
    }
    return this.currentSession.asObservable();
  }

  getLoggedInUser(): User {
    return this.currentSession.value ? this.currentSession.value.user : null;
  }
  getSessionToken(): string {
    if (this.currentSession.value)
      return this.currentSession.value.token;
    else return null;
  }
  requestLogout() {
    this.requestService.delete('auth').subscribe(data => {
      if (data.isSuccess && data.model) {
        this.deleteSession();
      }
    })
  }
  isUserLoggedIn() {
    const user = this.getLoggedInUser();
    const token = this.getSessionToken();
    return user && token;
  }
}
