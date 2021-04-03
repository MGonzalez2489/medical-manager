import { User } from './db/User';

export class Session {
    token: string;
    expiresAt: string;
    user: User;
}
