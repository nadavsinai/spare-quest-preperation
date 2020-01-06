import { createAction, props } from '@ngrx/store';

export const loadPlanets = createAction(
  '[Planets] Load Planets'
);

export const loadPlanetsSuccess = createAction(
  '[Planets] Load Planets Success',
  props<{ data: any }>()
);

export const loadPlanetsFailure = createAction(
  '[Planets] Load Planets Failure',
  props<{ error: any }>()
);
