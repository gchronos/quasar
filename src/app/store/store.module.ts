import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsResetPluginModule } from 'ngxs-reset-plugin';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { environment } from '../../environments/environment';
import { quasarState } from '@quasar/store/index';


@NgModule({
    imports: [
        CommonModule,
        NgxsModule.forRoot(
            [...quasarState],
            { developmentMode: environment.development }),
        NgxsStoragePluginModule.forRoot({
            key: ['user'] // TODO: add objects that need to store locally
        }),
        NgxsDispatchPluginModule.forRoot(),
        NgxsResetPluginModule.forRoot(),
        NgxsReduxDevtoolsPluginModule.forRoot()
    ],
    exports: [NgxsModule]
})
export class StoreModule {
}
