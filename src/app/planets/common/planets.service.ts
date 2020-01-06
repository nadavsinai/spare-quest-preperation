import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, pluck, withLatestFrom} from 'rxjs/operators';
import {LocalstorageService} from '../../common/localstorage.service';
import {IPlanetAssign} from './common.types';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  static assignments = 'assignments';

  async getAll(): Promise<string[]> {
    const planets = await this.httpClient
      .get<string[]>('/assets/planets.json')
      .pipe(
        // withLatestFrom(this.localStore.asObservable().pipe(pluck(PlanetsService.assignments))),
        // map(([planets, localAssignments]) => {
        //   if (Array.isArray(localAssignments)) {
        //     localAssignments.forEach((planeAssignment: IPlanetAssign) => {
        //       planets[planeAssignment.planet].assignedShip = planeAssignment.spaceship;
        //     })
        //   }
        //   return planets
        // })
      )
      .toPromise();
    return planets;
  }

  constructor(private httpClient: HttpClient, private localStore: LocalstorageService) {
  }
}
