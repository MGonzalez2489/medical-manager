export class BaseSearchCriteria {
    keyword: string;
    guid: string;
    page: number;      // number of current page
    perPage: number;  // count per page
    totalRecords: number; // total count
    totalPages: number; // total count of pages
    orderBy: string;
    orderDir: string;
    constructor() {
        this.page = 1;
        this.perPage = 10;
        this.totalPages = 0;
    }
}
