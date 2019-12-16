import { Action, State, StateContext } from '@ngxs/store';

import { Login } from '@quasar/store/user/user.actions';



@State<any>({
    name: 'user',
    defaults: {
    }
})
export class UserState {

    constructor(
    ) {

    }

    @Action(Login)
    setLocales({getState, patchState}: StateContext<any>, { payload }: Login) {
        const state: any = getState();

        patchState({});
    }
}
