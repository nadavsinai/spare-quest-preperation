/* tslint:disable */
import {IFuelSupply, Liters, LitersPerSecond, Octane, StartCallback, StopCallback} from './spaceship.interfaces';

const privateMap = new WeakMap<IFuelSupply, FuelSupplyPrivateState>();

export interface FuelSupplyPrivateState {
  isPumping: boolean;
  fuelLeft: Liters;
}

export function SolidFuelSupply(capacity: Liters): IFuelSupply {
  this.capacity = capacity;
  this.potency = 108 as Octane;
  this.flow = 0.5 as LitersPerSecond;
  privateMap.set(this, {isPumping: false, fuelLeft: this.capacity});
  return this;
}

SolidFuelSupply.prototype.pump = function pump(startCb: StartCallback) {
  // set private state
  privateMap.get(this).isPumping = true;

  // prepare the stopCallback
  const stopCb: StopCallback = function stopCallback() {
    privateMap.get(this).isPumping = false;
    return null;
  }.bind(this);


  // call the startCb in the next frame
  setTimeout(() => {
    startCb(null, stopCb);
  });

};


