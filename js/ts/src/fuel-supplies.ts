/* tslint:disable */
import {handlerCallback, IFuelSupply, Liters, LitersPerSecond, Octane, StartCallback, StopCallback} from './spaceship.interfaces';
import {ModernHyperDriveEngine, RocketEngine} from './engines';

// only object constructed in the scope of this const will be able to access it
const privateMap = new WeakMap<IFuelSupply, FuelSupplyPrivateState>();

export interface FuelSupplyPrivateState {
  isPumping: boolean;
  fuelLeft: Liters;
  consumptionInterval?: number | NodeJS.Timer
  fuelEndCallbacks?: Array<() => void>
}

export function SolidFuelSupply(capacity: Liters): void {
  this.capacity = capacity;
  this.potency = 108 as Octane;
  this.flow = 0.5 as LitersPerSecond;
  this.onFuelEnd = (callback: handlerCallback) => {
    // add the notifing function to our private state
    const index = privateMap.get(this).fuelEndCallbacks.push(callback);
    return () => {
      privateMap.get(this).fuelEndCallbacks.splice(index);
    }
  };
  // set the old-school private state;
  privateMap.set(this, {isPumping: false, fuelLeft: this.capacity, fuelEndCallbacks: []});
  //this is an old-school readonly property
  Object.defineProperty(this, 'fuelLeft', {
    configurable: false, enumerable: true, get(): any {
      return privateMap.get(this).fuelLeft;
    }
  });

}

SolidFuelSupply.prototype.pump = function pump(startCb: StartCallback) {


  // prepare the stopCallback
  const stopCb: StopCallback = function stopCallback() {
    privateMap.get(this).isPumping = false;
    clearInterval(consumptionInterval);
    return null;
  }.bind(this);


  // call the startCb in the next frame
  setTimeout(() => {
    // set private state
    if (this.fuelLeft > 0) {
      privateMap.get(this).isPumping = true;
      startCb(null, stopCb);
    } else {
      startCb(new Error('no fuel!'), stopCb);
    }
  });
  const consumptionInterval = setInterval(() => {
    if (privateMap.get(this).isPumping) {
      if (this.fuelLeft - this.flow >= 0) {
        privateMap.get(this).fuelLeft -= this.flow;
      } else {
        this.isPumping = false;
        clearInterval(consumptionInterval); // stop the interval;
        privateMap.get(this).fuelEndCallbacks.forEach(function (v: Function) {
          v();
        });
      }
    }
  }, 1000);
  privateMap.get(this).consumptionInterval = consumptionInterval;

};

export class LiquidNitrogenFuelSupply implements IFuelSupply {
  private fuelEndCallbacks: handlerCallback[];

  get fuelLeft(): number {
    return this._fuelLeft;
  }

  onFuelEnd = (callback: handlerCallback) => {
    // add the notifing function to our private state
    const index = this.fuelEndCallbacks.push(callback);
    return () => {
      this.fuelEndCallbacks.splice(index);
    }
  };
  readonly potency: Octane = 500;
  readonly flow = 5;
  private _fuelLeft: Liters;
  private consumptionInterval: NodeJS.Timer;
  private isPumping: boolean;

  constructor(public readonly capacity: Liters) {
    this._fuelLeft = capacity;
  }

  pump(startCb: (err: (Error | null), stopCb: StopCallback) => void): void {
    this.isPumping = true;
    const stopCb: StopCallback = () => {
      this.isPumping = false;
      clearInterval(this.consumptionInterval);
      return null;
    };

    setTimeout(() => {
      startCb(null, stopCb);
    });
    // keep this timers
    this.consumptionInterval = setInterval(() => {
      if (this.isPumping) {
        if (this.fuelLeft - this.flow >= 0) {
          this._fuelLeft -= this.flow;
        } else {
          this.isPumping = false;
          clearInterval(this.consumptionInterval); // stop the interval;
          this.fuelEndCallbacks.forEach(v => v());
        }
      }
    }, 1000);

  }
}

export class NuclearFuelSupply implements IFuelSupply {
  private fuelEndCallbacks: handlerCallback[];

  get fuelLeft(): number {
    return this._fuelLeft;
  }

  onFuelEnd = (callback: handlerCallback) => {
    // add the notifing function to our private state
    const index = this.fuelEndCallbacks.push(callback);
    return () => {
      this.fuelEndCallbacks.splice(index);
    }
  };
  readonly potency: Octane = 10000;
  readonly flow = 10;
  private _fuelLeft: Liters;
  private isPumping: boolean;

  constructor(public readonly capacity: Liters) {
    this._fuelLeft = capacity;
  }

  pump = LiquidNitrogenFuelSupply.prototype.pump.bind(this);
}

export function makeRocketWithSolidFuel() {
  return new RocketEngine(
    new SolidFuelSupply(100)
  );
}

export function makeRocketWithLiquidFuel() {
  return new RocketEngine(
    new LiquidNitrogenFuelSupply(500)
  );
}

export function makeHyperDriveEngine() {
  return new ModernHyperDriveEngine(
    new NuclearFuelSupply(1000)
  );
}

