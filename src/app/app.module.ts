import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HeroDetailComponent} from './hero-detail.component';

@NgModule({
    declarations: [
        AppComponent,
        HeroDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule // <-- import the FormsModule before binding with [(ngModel)]
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
