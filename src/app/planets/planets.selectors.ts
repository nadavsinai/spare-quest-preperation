import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPlanets from './planets.reducer';

export const selectPlanetstate = createFeatureSelector<fromPlanets.State>(
  fromPlanets.planetsFeatureKey
);
