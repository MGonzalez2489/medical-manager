import { HttpErrorResponse } from '@angular/common/http';

export class ReturnErrorModel<T> {
    httpError: number;
    isSuccess: boolean;
    message: string;
    model: T;

    constructor(errorValue: HttpErrorResponse) {
        this.httpError = errorValue.error.httpError;
        this.isSuccess = false;
        this.message = errorValue.error.message;
        this.model = errorValue.error.model;
    }
}
