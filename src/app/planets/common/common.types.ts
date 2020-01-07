export const destinationPlanetRouteData = 'toPlanetName';
export const fromPlanetRouteData = 'fromPlanetName';
export const shipRouteData = 'ship';
export type AU = number;

export interface IPlanetData {
  name: string;
  distance: AU;
}

export interface ISamples {
  position: string;
  weight: number;
  sampleLabel: string;
}

export interface IPlanetForm {
  astronautName: string;
  date: Date;
  samples: ISamples[]
}
