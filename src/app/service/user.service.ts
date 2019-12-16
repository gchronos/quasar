import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';


export interface IGoogleUserProfile {
    email: string;
    family_name: string;
    given_name: string;
    granted_scopes: string;
    id: string;
    locale: string;
    name: string;
    picture: string;
    verified_email: boolean;
}

export interface IGoogleLoginRes {
    additionalUserInfo: {
        isNewUser: boolean;
        profile: IGoogleUserProfile,
        providerId: string;
    };
    credential: {
        a: null;
        accessToken: string;
        idToken: string;
        providerId: string;
        signInMethod: string;
    };
    operationType: string;
    user?: object;
}

export interface IUserSettings {
    donationalertsId: string;
}

export interface IUserData {
    settings: IUserSettings;
    user: IGoogleUserProfile;
}

export interface ISettingsHelp {
    image: string;
    title: string;
}

export enum SettingsHelp {
    donationalerts,
}



@Injectable({
    providedIn: 'root'
})
export class UserService {
    private db: AngularFirestoreDocument<any>;
    user: BehaviorSubject<IGoogleUserProfile> = new BehaviorSubject(null);

    constructor(
        private angularFirestore: AngularFirestore
    ) {
        this.user.subscribe(user => {
            if (user) {
                this.db = this.angularFirestore
                    .collection('users')
                    .doc(user.id);
            }
        });
    }

    async initDb() {
        // const user = await this.storage.get('user');
        const user = {};
        this.user.next(user);
    }

    setSettings(settings: IUserSettings): void {
        this.db.set({settings}, {merge: true});
    }

    setUser(user: IGoogleUserProfile): void {
        this.user.next(user);

        // this.storage.set('user', user);

        this.angularFirestore
            .collection('users')
            .doc(user.id)
            .set({user}, {merge: true});
    }

    getUserData(): Observable<IUserData> {
        return this.db.valueChanges();
    }
}
