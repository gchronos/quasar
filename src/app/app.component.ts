import {Component, OnInit} from '@angular/core';
import {firebase} from '@firebase/app';

import {AuthGuardService} from '@quasar/service/auth-guard.service';
import {UserService} from '@quasar/store/user/user.service';
import {Store} from '@ngxs/store';


@Component({
  selector: 'quasar-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    isAuthenticated: boolean;

    constructor(
        private authGuardService: AuthGuardService,
        private userService: UserService,
        private store: Store
    ) {
        firebase.initializeApp({
            apiKey: 'AIzaSyDxtqzENSkBzsfNXg0YByYgY_BOilEmfnI',
            authDomain: 'quasar-x.firebaseapp.com',
            databaseURL: 'https://quasar-x.firebaseio.com',
            projectId: 'quasar-x',
            storageBucket: 'quasar-x.appspot.com',
            messagingSenderId: '588854913202',
            appId: '1:588854913202:web:d4cb4e8326897d0a9401ab',
            measurementId: 'G-VLHB4K3M1R'
        });
    }

    ngOnInit() {
        console.log(this.store.selectSnapshot(UserService.user));
    }
}
