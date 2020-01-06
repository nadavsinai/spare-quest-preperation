import {Injectable, Type} from '@angular/core';
import {Enterprise, Appolo, Genesis, ISpaceship, BaseSpaceShip} from "@algotec/spaceship-parts";
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpaceshipsService {
  shipsAvailable$: Observable<{ [key: string]: Type<ISpaceship> }> = of({Enterprise, Appolo, Genesis});

  constructor() {
  }

  constructSpaceShip<T extends ISpaceship>(spaceship: Type<T>): Promise<T> {
    const ship = new spaceship();
    const complexity = ship.complexity + ship.engine.complexity;
    return of(ship).pipe(delay(complexity * 2000)).toPromise();
  }
}
