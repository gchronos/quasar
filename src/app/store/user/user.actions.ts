import { LoginRes } from './user.model';

export class Login {
    static readonly type = '[Login]: action';

    constructor(public payload: LoginRes) {}
}



