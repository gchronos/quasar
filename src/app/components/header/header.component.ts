import {Component, OnInit} from '@angular/core';

import {UserService} from '@quasar/store/user/user.service';


@Component({
    selector: 'quasar-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(
        private userService: UserService,
    ) {
    }

    ngOnInit() {
    }

    onLogout() {
        this.userService.logOut();
    }
}
