import {Dispatch} from '@ngxs-labs/dispatch-decorator';
import {Injectable} from '@angular/core';
import {Select, Selector} from '@ngxs/store';
import {Observable} from 'rxjs';

import {UserData, UserStateData} from '@quasar/store/user/user.model';
import {Login} from '@quasar/store/user/user.actions';


@Injectable({providedIn: 'root'})
export class UserService {

    @Select(state => state.user)
    public user$: Observable<UserStateData>;

    @Selector()
    static user(state: UserStateData): UserData {
        console.log(state);
        return state.user;
    }

    @Selector()
    static isAuthenticated(state: UserStateData): boolean {
        return state.isAuthenticated;
    }

    @Dispatch()
    public login(payload: any) {
        return new Login(payload);
    }
}
