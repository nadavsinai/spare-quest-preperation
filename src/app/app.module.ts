import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MainComponent} from './main/main.component';
import {FooterComponent} from './footer/footer.component';
import { HeadquartersComponent } from './main/headquarters/headquarters.component';
import { PlanetVotesComponent } from './main/planet-votes/planet-votes.component';
import { PlanetComponent } from './main/planet-votes/planet/planet.component';
import {RouterModule} from '@angular/router';
import {plantsAppRoutes} from './app.routes';
import { PlanetVisitComponent } from './planet-visit/planet-visit.component';
import { PlanetSampleFormComponent } from './planet-visit/planet-sample-form/planet-sample-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { TrendyInputComponent } from './planet-visit/planet-sample-form/trendy-input/trendy-input.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MainComponent,
        FooterComponent,
        HeadquartersComponent,
        PlanetVotesComponent,
        PlanetComponent,
        PlanetVisitComponent,
        PlanetSampleFormComponent,
        TrendyInputComponent
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(plantsAppRoutes),
    ReactiveFormsModule
  ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
