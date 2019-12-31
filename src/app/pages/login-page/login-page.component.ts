import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as firebaseui from 'firebaseui';
import {firebase} from '@firebase/app';

import {UserService} from '@quasar/store/user/user.service';

@Component({
    selector: 'quasar-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, AfterViewInit {

    constructor(
        private userService: UserService
    ) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        const uiConfig = {
            signInSuccessUrl: '<url-to-redirect-to-on-success>',
            signInOptions: [
                // @ts-ignore
                firebase.auth.PhoneAuthProvider.PROVIDER_ID,
            ],
        };

        // Initialize the FirebaseUI Widget using Firebase.
        // @ts-ignore
        const ui = new firebaseui.auth.AuthUI(firebase.auth());
        // The start method will wait until the DOM is loaded.
        ui.start('#firebaseui-auth-container', uiConfig);

        // @ts-ignore
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // User is signed in.
                const phoneNumber = user.phoneNumber;
                user.getIdToken().then(() => {
                    this.userService.login({phoneNumber});
                });
            }
        }, (error) => {
            console.log(error);
        });
    }
}
