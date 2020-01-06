import { Action, createReducer, on } from '@ngrx/store';
import * as PlanetsActions from './planets.actions';

export const planetsFeatureKey = 'planets';

export interface State {

}

export const initialState: State = {

};

const planetsReducer = createReducer(
  initialState,

  on(PlanetsActions.loadPlanets, state => state),
  on(PlanetsActions.loadPlanetsSuccess, (state, action) => state),
  on(PlanetsActions.loadPlanetsFailure, (state, action) => state),

);

export function reducer(state: State | undefined, action: Action) {
  return planetsReducer(state, action);
}
