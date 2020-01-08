import {Action, createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import {IEngine, IFuelSupply, ISpaceship} from 'js/ts/dist/index';
import {Type} from '@angular/core';
import {assignShip, buySpaceship, createSpaceshipSuccess, refuelSpaceship, spaceshipLost, unassignShip} from './spaceship.actions';
import {ShipWithPosition} from '../../planets/common/common.types';

export interface ISpaceshipsState {
  ships: { [key: number]: ISpaceship };
  assignments: { [key: number]: Omit<ShipWithPosition, 'ship'> }
}

const spaceshipsInitialState: ISpaceshipsState = {
  ships: {},
  assignments: {}
};
const addShipReducer = (state, action: { ship: ISpaceship }) => {
  const oldShips = state.ships;
  const newIndex = Object.keys(oldShips).length;
  const ships = {...oldShips, [newIndex]: action.ship};

  return {...state, ships}
};

function refuelShip(thisShip: ISpaceship) {
  const constructor = thisShip.constructor as Type<ISpaceship>;
  const engineConstructor = thisShip.engine.constructor as Type<IEngine>;
  const fuelSupplyConstructor = thisShip.engine.fuelSupply.constructor as Type<IFuelSupply>;
  const newEngine = new engineConstructor(new fuelSupplyConstructor(thisShip.engine.fuelSupply.capacity));
  const refueledShip = new constructor(newEngine);
  refueledShip.currentLoad = thisShip.currentLoad;
  return refueledShip;
}

const onRefuelShip = on(refuelSpaceship, (state: ISpaceshipsState, action) => {
  const oldShips = state.ships;
  let thisShip = oldShips[action.shipId];
  if (thisShip) {
    oldShips[action.shipId] = refuelShip(thisShip);
  }
  return {...state, ships: {...oldShips}};
});
const onAssignShip = on(assignShip, (state: ISpaceshipsState, action) => {
  if (!state.assignments[action.shipId]) {
    state = {...state, assignments: {...state.assignments, [action.shipId]: {anchorPlanet: action.destination, move: {x: 0, y: 0}}}}
  }
  return state;
});
const onUnassignShip = on(unassignShip, (state: ISpaceshipsState, action) => {
    if (state.assignments[action.shipId]) {
      const {[action.shipId]: removedShip, ...newAssignments} = state.assignments;
      state = {...state, assignments: newAssignments}
    }
    return state;
  }
);

const spaceshipsInternalReducer = createReducer(spaceshipsInitialState,
  on(createSpaceshipSuccess, addShipReducer),
  on(spaceshipLost, (state, action) => {
    const {[action.shipId]: oldShips, ...otherShips} = state.ships;
    return {...state, ships: otherShips}
  }),
  onRefuelShip,
  onAssignShip,
  onUnassignShip
);

export function spaceShipReducer(state: ISpaceshipsState, action: Action) {
  return spaceshipsInternalReducer(state, action);
}

export const SPACESHIPS_FEATURE_NAME = 'spaceships';
export const SpaceshipsStateSelector = createFeatureSelector<ISpaceshipsState>(SPACESHIPS_FEATURE_NAME);
export const spaceShipsOwnedSelector = createSelector(SpaceshipsStateSelector, (state) => state.ships);
