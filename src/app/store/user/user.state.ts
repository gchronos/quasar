import {Action, State, StateContext} from '@ngxs/store';

import {Login, Logout} from '@quasar/store/user/user.actions';
import {UserStateData} from '@quasar/store/user/user.model';


@State<UserStateData>({
    name: 'user',
    defaults: {
        isAuthenticated: false,
        user: {
            phoneNumber: ''
        }
    }
})
export class UserState {

    constructor() {
    }

    @Action(Login)
    login({patchState}: StateContext<any>, {payload}: Login) {
        patchState({
            isAuthenticated: true,
            user: {
                phoneNumber: payload.phoneNumber
            }
        });
    }

    @Action(Logout)
    logout({patchState}: StateContext<any>) {
        patchState({
            isAuthenticated: false,
            user: {
                phoneNumber: ''
            }
        });
    }
}
