import {createAction, props} from '@ngrx/store';
import {ISpaceship, SpaceShipFactory} from '@algotec/spaceship-parts';

export const buySpaceship = createAction('[spaceships] buy spaceship', props<{ ship: SpaceShipFactory<any> }>());
export const createSpaceship = createAction('[spaceships] create spaceship', props<{ ship: SpaceShipFactory<any> }>());
export const createSpaceshipSuccess = createAction('[spaceships] create spaceship success', props<{ ship: ISpaceship }>());
export const createSpaceshipFailed = createAction('[spaceships] create spaceship fail', props<{ ship: SpaceShipFactory<any>,error?:Error }>());
export const spaceShipIdProps = props<{ shipId: number }>();
export const spaceshipLost = createAction('[spaceships] spaceship lost', spaceShipIdProps);
export const startShip = createAction('[spaceships] start spaceship', spaceShipIdProps);
export const startShipSuccess = createAction('[spaceships] start spaceship success', spaceShipIdProps);
export const startShipFailed = createAction('[spaceships] start spaceship fail', spaceShipIdProps);
export const stopShip = createAction('[spaceships] stop spaceship', spaceShipIdProps);
export const refuelSpaceship = createAction('[spaceships] refuel spaceship ', props<{ shipId: number }>());
export const assignShip = createAction('[spaceships] assign spaceship', props<{ shipId: number, destination: string }>());
export const unassignShip = createAction('[spaceships] remove spaceship assignment', props<{ shipId: number }>());
