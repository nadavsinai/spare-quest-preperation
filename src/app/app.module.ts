import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MainComponent} from './main/main.component';
import {FooterComponent} from './footer/footer.component';
import { HeadquartersComponent } from './main/headquarters/headquarters.component';
import { PlanetVotesComponent } from './main/planet-votes/planet-votes.component';
import { PlanetComponent } from './main/planet-votes/planet/planet.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MainComponent,
        FooterComponent,
        HeadquartersComponent,
        PlanetVotesComponent,
        PlanetComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
