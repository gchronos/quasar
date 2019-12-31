import {Injectable} from '@angular/core';
import {Store} from '@ngxs/store';

import {UserService} from '@quasar/store/user/user.service';


@Injectable({
    providedIn: 'root'
})
export class AuthGuardService {

    constructor(
        private store: Store
    ) {
    }

    canActivate() {
        return this.store.selectSnapshot(UserService.isAuthenticated);
    }
}
