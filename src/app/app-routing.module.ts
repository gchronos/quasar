import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LangRoutePages } from '@quasar/app-routing.model';
import { HomePageComponent } from '@quasar/pages/home/home-page.component';


const routes: Routes = [
    {
        path: LangRoutePages.home,
        component: HomePageComponent
    }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
