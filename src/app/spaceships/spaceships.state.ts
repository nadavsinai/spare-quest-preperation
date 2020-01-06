import {Action, ActionCreator, ActionType, createAction, createReducer, on, props} from '@ngrx/store';
import {IEngine, IFuelSupply, ISpaceship} from '@algotec/spaceship-parts';
import {Type} from '@angular/core';

const createSpaceship = createAction('[spaceships] create spaceship', props<{ ship: ISpaceship }>());
const spaceShipIdProps = props<{ shipId: number }>();

const spaceshipLost = createAction('[spaceships] spaceship lost', spaceShipIdProps);
const startShip = createAction('[spaceships] start spaceship', spaceShipIdProps);
const startShipSuccess = createAction('[spaceships] start spaceship success', spaceShipIdProps);
const startShipFailed = createAction('[spaceships] start spaceship fail', spaceShipIdProps);
const stopShip = createAction('[spaceships] stop spaceship', spaceShipIdProps);
const refuelSpaceship = createAction('[spaceships] refuel spaceship ', props<{ shipId: number }>());
const assignShip = createAction('[spaceships] assign spaceship', props<{ shipId: number, destination: string }>());
const unassignShip = createAction('[spaceships] remove spaceship assignment', props<{ shipId: number }>());

export interface ISpaceshipsState {
  ships: { [key: number]: ISpaceship };
  assignments: { [key: number]: { onMissionTo: string, startTime: number } }
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
    state = {...state, assignments: {...state.assignments, [action.shipId]: {onMissionTo: action.destination, startTime: Date.now()}}}
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
  on(createSpaceship, addShipReducer),
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
