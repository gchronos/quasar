import { MatButtonModule, MatCheckboxModule, MatMenuModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { HeaderComponent } from '@quasar/components/header/header.component';
import { FooterComponent } from '@quasar/components/footer/footer.component';
import { HomePageComponent } from '@quasar/pages/home/home-page.component';
import { MenuComponent } from '@quasar/components/menu/menu.component';
import { AppRoutingModule } from '@quasar/app-routing.module';
import { AppComponent } from '@quasar/app.component';


@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        HeaderComponent,
        FooterComponent,
        MenuComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatMenuModule,
        MatButtonModule,
        NgxAudioPlayerModule,
        MatCheckboxModule,
        FormsModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
