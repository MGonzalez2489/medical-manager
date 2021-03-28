export class ReturnModel<T> {
    isSuccess: boolean;
    model: T;
    message: string;
    httpError: string;
}
