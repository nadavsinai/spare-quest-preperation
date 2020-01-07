import {Injectable, Type} from '@angular/core';
import {Enterprise, Appolo, Genesis, ISpaceship, BaseSpaceShip, SpaceShipFactory} from "@algotec/spaceship-parts";
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpaceshipsService {
  shipsAvailable$: Observable<{ [key: string]: SpaceShipFactory<any> }> = of({Enterprise, Appolo, Genesis});
  myShips: ISpaceship[] = [new Appolo()];

  constructor() {
  }

  constructSpaceShip<T extends ISpaceship>(spaceship: SpaceShipFactory<T>): Promise<T> {
    const ship = new spaceship();
    const complexity = ship.complexity + ship.engine.complexity;
    return of<T>(ship).pipe(delay(complexity * 2000)).toPromise()
      .then((ship) => {
        this.myShips.push(ship as ISpaceship);
        return ship;
      });
  }
}
