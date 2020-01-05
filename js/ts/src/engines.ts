import {Complexity, Dollars, IEngine, IFuelSupply, Liters, StopCallback} from './spaceship.interfaces';

export abstract class BaseEngine implements IEngine {
  abstract complexity: Complexity;
  private stopFuelSupply: StopCallback | null = null;

  readonly maxSpeed: number;
  readonly price: Dollars;

  protected constructor(public fuelSupply: IFuelSupply) {
  }

  start(): Promise<void> {
    return new Promise((resolve, reject) => {
      const pumpStartedCb = (err: Error | null, stopCb: StopCallback) => {
        this.stopFuelSupply = stopCb;
        if (!err) {
          resolve();
        } else {
          reject(err);
        }
      };
      this.fuelSupply.pump(pumpStartedCb);
    });
  }

  stop(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (this.stopFuelSupply) {
        const stopErr = this.stopFuelSupply();
        if (stopErr == null) {
          return resolve();
        }
      }
      reject();
    });

  }

}


export class RocketEngine extends BaseEngine {
  static price = 50000;
  static complexity = Complexity.LOW;
  readonly complexity = SmartRocketEngine.complexity;
  readonly price = SmartRocketEngine.price;

  constructor(fuelSupply: IFuelSupply) {
    super(fuelSupply);
  }
}

export class SmartRocketEngine extends BaseEngine {
  static price = 80000;
  static complexity = Complexity.HIGH;
  readonly complexity = SmartRocketEngine.complexity;
  readonly price = SmartRocketEngine.price;

  constructor(fuelSupply: IFuelSupply) {
    super(fuelSupply);
  }
}

export class ModernHyperDriveEngine extends BaseEngine {
  static price = 500000;
  static complexity = Complexity.SUPER_HIGH;
  readonly complexity = ModernHyperDriveEngine.complexity;
  readonly price = ModernHyperDriveEngine.price;

  constructor(fuelSupply: IFuelSupply) {
    super(fuelSupply);
  }
}