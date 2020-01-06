import {Complexity, Dollars, IEngine, ISpaceship, Kilograms} from './spaceship.interfaces';
import {RocketEngine} from './engines';
import {makeHyperDriveEngine, makeRocketWithLiquidFuel, makeRocketWithSolidFuel, SolidFuelSupply} from './fuel-supplies';

export class OverWeightError extends Error {}

export abstract class BaseSpaceShip implements ISpaceship {
  abstract name:string;
  get currentLoad(): number {
    return this._currentLoad;
  }

  set currentLoad(value: Kilograms) {
    if (value > this.maxLoad) {
      throw new OverWeightError(`max Load of ${this.maxLoad} reached!`);
    } else {
      this._currentLoad = value;
    }
  }

  abstract complexity: Complexity;
  // tslint:disable-next-line:variable-name
  private _currentLoad: Kilograms = 0;

  abstract readonly maxLoad: Kilograms;
  abstract readonly price: Dollars;

  constructor(public engine: IEngine) {

  }

}


export class Appolo extends BaseSpaceShip implements ISpaceship {
  readonly name = 'Appolo';
  static price = 100_000_000;
  static complexity = Complexity.LOW;
  readonly price = Appolo.price;
  complexity = Appolo.complexity;
  readonly maxLoad = 200;
  currentLoad = 0;

  constructor(engine = makeRocketWithSolidFuel()) {
    super(engine);
  }
}

export class Genesis extends BaseSpaceShip implements ISpaceship {
  readonly name = 'Genesis';
  static price = 500_000_000;
  static complexity = Complexity.HIGH;
  readonly price = Genesis.price;
  complexity = Genesis.complexity;
  readonly maxLoad = 500;
  currentLoad = 0;

  constructor(engine = makeRocketWithLiquidFuel()) {
    super(engine);
  }

}

export class Enterprise extends BaseSpaceShip implements ISpaceship {
  readonly name = 'Enterprise';
  static price = 1_000_000_000;
  static complexity = Complexity.SUPER_HIGH;
  readonly price = Enterprise.price;
  complexity = Enterprise.complexity;
  readonly maxLoad = 1000;
  currentLoad = 0;

  constructor(engine = makeHyperDriveEngine()) {
    super(engine);
  }

}
