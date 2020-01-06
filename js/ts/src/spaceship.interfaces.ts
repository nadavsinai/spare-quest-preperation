export enum Complexity {
  VERY_LOW = 1,
  LOW,
  MEDIUM,
  HIGH,
  SUPER_HIGH
}

export interface HasPrice {
  readonly price: Dollars;
}

// tslint:disable-next-line:interface-over-type-literal
export type HasComplexity = {
  readonly complexity: Complexity;
};

export interface ISpaceship extends HasPrice, HasComplexity {
  readonly engine: IEngine;
  readonly name: string;
  readonly maxLoad: Kilograms;
  currentLoad: Kilograms;
}

export interface SpaceShipFactory<T extends ISpaceship> extends HasPrice, HasComplexity {
  new(engine?: IEngine): T
}

export type Dollars = number;
export type Kilograms = number;
export type Liters = number;
export type LitersPerSecond = number;
export type Octane = number;

export interface IEngine extends HasPrice, HasComplexity {
  readonly maxSpeed: number;
  readonly fuelSupply: IFuelSupply;


  start(): Promise<void>;

  stop(): Promise<void>;
}

export type StopCallback = () => Error | null;
export type StartCallback = (err: Error | null, stopCb: StopCallback) => void;

export interface IFuelSupply {
  capacity: Liters;
  potency: Octane;
  flow: LitersPerSecond;
  onFuelEnd: Array<() => void>;
  fuelLeft: Liters;


  pump(startCb: StartCallback): void;

}
