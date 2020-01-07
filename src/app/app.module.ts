import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './common/app-component/app.component';
import {HeaderComponent} from './header/header.component';

import {RouterModule} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from './common/index';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {NotFoundComponent} from './not-found/not-found.component';
import {PlanetsModule} from './planets/planets.module';
import {EffectsModule} from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http';
import {LocalstorageService, STORAGE} from './common/localstorage.service';
import {AppRoutingModule} from './common/routes/app-routing.module';
import {SpaceshipsModule} from './spaceships/spaceships.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([]),
    HttpClientModule,
    PlanetsModule,
    SpaceshipsModule,
    RouterModule.forChild([{path: "**", redirectTo: '404'}])
  ],
  providers: [LocalstorageService, {provide: STORAGE, useValue: localStorage}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
