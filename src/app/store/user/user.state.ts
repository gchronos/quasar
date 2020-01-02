import {Action, State, StateContext} from '@ngxs/store';
import {firebase} from '@firebase/app';
import {Router} from '@angular/router';

import {Login, Logout} from '@quasar/store/user/user.actions';
import {UserStateData} from '@quasar/store/user/user.model';
import {LangRoutePages} from '@quasar/app-routing.model';


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

    constructor(
        private router: Router
    ) {
    }

    @Action(Login)
    login({patchState}: StateContext<any>, {payload}: Login) {
        this.router.navigate([LangRoutePages.home]);

        // @ts-ignore
        patchState({
            isAuthenticated: true,
            user: {
                phoneNumber: payload.phoneNumber
            }
        });
    }

    @Action(Logout)
    async logout({patchState}: StateContext<any>) {
        // @ts-ignore
        await firebase.auth().signOut();
        await this.router.navigate([LangRoutePages.login]);

        patchState({
            isAuthenticated: false,
            user: {
                phoneNumber: ''
            }
        });
    }
}
