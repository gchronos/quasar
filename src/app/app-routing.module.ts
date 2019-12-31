import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomePageComponent } from '@quasar/pages/home-page/home-page.component';
import {AuthGuardService} from '@quasar/service/auth-guard.service';
import { LangRoutePages } from '@quasar/app-routing.model';
import {LoginPageComponent} from '@quasar/pages/login-page/login-page.component';



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
    { path: '**', redirectTo: LangRoutePages.home }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
