import {Injectable} from '@angular/core';
import {Appolo, Enterprise, Genesis, ISpaceship, SpaceShipFactory} from "@algotec/spaceship-parts";
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {Cords, ShipWithPosition} from '../planets/common/common.types';
import {NotificationsService} from '../notifications/notifications.service';

const basePlanetPos: Omit<ShipWithPosition, 'ship'> = {anchorPlanet: 'Earth', move: {x: 0, y: 0}};

@Injectable({
  providedIn: 'root'
})
export class SpaceshipsService {
  shipsAvailable$: Observable<{ [key: string]: SpaceShipFactory<any> }> = of({Enterprise, Appolo, Genesis});
  private myShips: ShipWithPosition[] = [];

  constructor(private notificationService: NotificationsService) {
  }

  constructSpaceShip<T extends ISpaceship>(spaceship: SpaceShipFactory<T>): Promise<T> {
    const stop = this.notificationService.notify('ship under construction');
    const ship = new spaceship();
    const complexity = ship.complexity + ship.engine.complexity;
    return of<T>(ship).pipe(delay(complexity * 2000)).toPromise()
      .then((ship) => {
        this.myShips.push({ship: ship as ISpaceship, ...basePlanetPos});
        stop();
        return ship;
      });
  }

  getShip(shipId: number): ISpaceship | undefined {
    const shipWithPosition = this.myShips[shipId];
    if (shipWithPosition) {
      return shipWithPosition.ship
    }
  }

  getPosition(shipOrId: number | ISpaceship): { move: Cords; anchorPlanet: string } {
    const shipObj = (typeof shipOrId === 'number') ? this.myShips[shipOrId] : this.myShips.find(shipsDesc => shipsDesc.ship === shipOrId);
    if (shipObj) {
      let {anchorPlanet, move} = shipObj;
      return {anchorPlanet, move};
    }

  }
}
