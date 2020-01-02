import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import {LoginPageComponent} from '@quasar/pages/login-page/login-page.component';
import {HomePageComponent} from '@quasar/pages/home-page/home-page.component';
import {AuthGuardService} from '@quasar/service/auth-guard.service';
import {LangRoutePages} from '@quasar/app-routing.model';


const routes: Routes = [
    {
        path: LangRoutePages.home,
        component: HomePageComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: LangRoutePages.login,
        component: LoginPageComponent
    },
    {path: '**', redirectTo: LangRoutePages.login}
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
