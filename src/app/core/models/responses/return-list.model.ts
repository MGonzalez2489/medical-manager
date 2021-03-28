export class ReturnListModel<T> {
    isSuccess: boolean;
    model: T[];
    totalRecords: number;
    totalPages: number;
    message: string;
    httpError: string;

    constructor() {
        this.model = [];
    }
}
