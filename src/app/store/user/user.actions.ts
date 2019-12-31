import { UserData } from './user.model';

export class Login {
    static readonly type = '[Auth] Login';

    constructor(public payload: UserData) {}
}

export class Logout {
    static readonly type = '[Auth] Logout';
}


