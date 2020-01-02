import {Dispatch} from '@ngxs-labs/dispatch-decorator';
import {Injectable} from '@angular/core';
import {Select, Selector} from '@ngxs/store';
import {Observable} from 'rxjs';

import {UserData, UserStateData} from '@quasar/store/user/user.model';
import {Login, Logout} from '@quasar/store/user/user.actions';
import {UserState} from '@quasar/store/user/user.state';


@Injectable({providedIn: 'root'})
export class UserService {

    @Select(state => state.user)
    public user$: Observable<UserStateData>;

    @Selector([UserState])
    static user(state: UserStateData): UserData {
        return state.user;
    }

    @Selector([UserState])
    static isAuthenticated(state: UserStateData): boolean {
        return state.isAuthenticated;
    }

    @Dispatch()
    public login(payload: any) {
        return new Login(payload);
    }

    @Dispatch()
    public logOut() {
        return new Logout();
    }
}
