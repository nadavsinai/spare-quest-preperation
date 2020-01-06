import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReactiveFormsModule} from '@angular/forms';
import {HeadquartersComponent} from './headquarters/headquarters.component';
import {PlanetsViewComponent} from './planets-view/planets-view.component';
import {PlanetComponent} from './planets-view/planet/planet.component';
import {PlanetVisitComponent} from './planet-visit/planet-visit.component';
import {PlanetSampleFormComponent} from './planet-visit/planet-sample-form/planet-sample-form.component';

import {TrendyInputComponent} from './planet-visit/planet-sample-form/trendy-input/trendy-input.component';
import {RouterModule} from '@angular/router';
import {planetRoutes} from './common/planet.routes';
import {StoreModule} from '@ngrx/store';
import * as fromPlanets from './common/planets.reducer';
import {EffectsModule} from '@ngrx/effects';
import {PlanetsEffects} from './common/planets.effects';
import { MyShipsComponent } from './my-ships/my-ships.component';


@NgModule({
  declarations: [HeadquartersComponent,
    PlanetsViewComponent,
    PlanetComponent,
    PlanetVisitComponent,
    PlanetSampleFormComponent,
    TrendyInputComponent,
    MyShipsComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(planetRoutes),
    StoreModule.forFeature(fromPlanets.planetsFeatureKey, fromPlanets.reducer),
    EffectsModule.forFeature([PlanetsEffects])
  ]
})
export class PlanetsModule {}
