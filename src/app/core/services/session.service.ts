import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Session } from '../models';
import { User } from '../models/db/User';


@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private currentSession: BehaviorSubject<Session> = new BehaviorSubject<Session>(null);
  private SESSION_KEY = 'session';

  constructor() { 
    this.getSession();
  }

  storeSession(newSession: Session): void {
    localStorage.setItem(this.SESSION_KEY, JSON.stringify(newSession));
  }

  setSession(newSession: Session): void {
    this.currentSession.next(newSession);
    this.storeSession(newSession);
  }
  deleteSession(): void {
    this.currentSession.complete();
    this.currentSession.unsubscribe();
    localStorage.removeItem(this.SESSION_KEY);
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

  getLoggedInUser(): User{
    return this.currentSession.value.user;
  }
}
