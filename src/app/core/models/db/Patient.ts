import { User } from './User';

export class Patient extends User {
    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}
