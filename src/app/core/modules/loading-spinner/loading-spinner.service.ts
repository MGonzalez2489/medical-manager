import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class LoadingSpinnerService {

    public spinnerSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);

    constructor() { }

    show(): void {
        // tslint:disable-next-line: no-debugger
        const counter = this.spinnerSubject.value + 1;
        this.spinnerSubject.next(counter);
    }

    hide(): void {
        const counter = this.spinnerSubject.value - 1;
        this.spinnerSubject.next(counter);
    }

    getMessage(): Observable<number> {
        return this.spinnerSubject.asObservable();
    }
}
