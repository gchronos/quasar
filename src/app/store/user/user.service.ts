import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Injectable } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { Login } from '@quasar/store/user/user.actions';



@Injectable({providedIn: 'root'})
export class UserService {

    @Select(state => state.user)
    public user$: Observable<any>;


    @Dispatch()
    public login(payload: any) {
        return new Login(payload);
    }
}
