import {Injectable} from '@angular/core';
import {Appolo, Enterprise, Genesis, ISpaceship, SpaceShipFactory} from "@algotec/spaceship-parts";
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {Cords, ShipWithPosition} from '../planets/common/common.types';
import {NotificationsService} from '../notifications/notifications.service';
import {spaceshipLost} from './state/spaceship.actions';
import {SpaceAppState} from '../common/state/app.state';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';

const basePlanetPos: Omit<ShipWithPosition, 'ship'> = {anchorPlanet: 'Earth', move: {x: 0, y: 0}};

@Injectable({
  providedIn: 'root'
})
export class SpaceshipsService {
  shipsAvailable$: Observable<{ [key: string]: SpaceShipFactory<any> }> = of({Enterprise, Appolo, Genesis});
  private myShips: ShipWithPosition[] = [];

  constructor(private notificationService: NotificationsService, private store: Store<SpaceAppState>, private router: Router) {
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

  setPosition(shipOrId: number, anchorPlanet: string, move: Cords = {x: 0, y: 0}) {
    const ship = this.myShips[shipOrId];
    if (ship) {
      ship.anchorPlanet = anchorPlanet;
      ship.move = move;
    }

  }

  async onFuelEnd(shipId: number) {
    const stopNotify = this.notificationService.notify('spaceship lost!');
    this.myShips.splice(shipId);
    setTimeout(stopNotify, 5000);
    this.store.dispatch(spaceshipLost({shipId: shipId}));
    await this.router.navigateByUrl('/');
  }
}
