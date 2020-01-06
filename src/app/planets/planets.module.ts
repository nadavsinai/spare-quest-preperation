import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReactiveFormsModule} from '@angular/forms';
import {HeadquartersComponent} from './headquarters/headquarters.component';
import {PlanetVotesComponent} from './planet-votes/planet-votes.component';
import {PlanetComponent} from './planet-votes/planet/planet.component';
import {PlanetVisitComponent} from './planet-visit/planet-visit.component';
import {PlanetSampleFormComponent} from './planet-visit/planet-sample-form/planet-sample-form.component';

import {TrendyInputComponent} from './planet-visit/planet-sample-form/trendy-input/trendy-input.component';
import {RouterModule} from '@angular/router';
import {planetRoutes} from './planet.routes';
import { StoreModule } from '@ngrx/store';
import * as fromPlanets from './planets.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PlanetsEffects } from './planets.effects';


@NgModule({
  declarations: [HeadquartersComponent,
    PlanetVotesComponent,
    PlanetComponent,
    PlanetVisitComponent,
    PlanetSampleFormComponent,
    TrendyInputComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(planetRoutes),
    StoreModule.forFeature(fromPlanets.planetsFeatureKey, fromPlanets.reducer),
    EffectsModule.forFeature([PlanetsEffects])
  ]
})
export class PlanetsModule {}
