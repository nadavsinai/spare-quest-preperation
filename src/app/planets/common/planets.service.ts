import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IPlanetData, IPlanetForm} from './common.types';
import {SpaceAppState} from '../../common/state/app.state';
import {Store} from '@ngrx/store';
import {DepositAction} from '../../common/state/balance.state';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  async getAll(): Promise<IPlanetData[]> {
    const planets = await this.httpClient
      .get<IPlanetData[]>('/assets/planets.json')
      .toPromise();
    return planets;
  }

  private spaceSamples: { [key: string]: IPlanetForm[] } = {};

  addSample(planet: string, sample: IPlanetForm) {
    if (!Array.isArray(this.spaceSamples[planet])) {
      this.spaceSamples[planet] = [sample];
    } else {
      this.spaceSamples[planet].push(sample);
    }
    const reward = getLoad(sample.samples, (sample) => sample.weight) * 50000;
    this.store.dispatch(new DepositAction(reward));

  }

  getStatsForPlanet(planet: string) {
    return Array.isArray(this.spaceSamples[planet]) ? this.spaceSamples[planet].length : 0;
  }

  constructor(private httpClient: HttpClient, private store: Store<SpaceAppState>) {
  }
}

export function getLoad<T = number>(controls: T[], valueGetter: (T) => string = (v) => v) {
  return controls.reduce((acc, sample: T) => {
    acc = acc + parseFloat(valueGetter(sample));
    return acc;
  }, 0);
}
