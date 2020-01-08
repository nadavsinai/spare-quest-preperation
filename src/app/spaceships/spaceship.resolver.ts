import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {ISpaceship} from '@algotec/spaceship-parts';
import {Observable} from 'rxjs';
import {SpaceshipsService} from './spaceships.service';
import {shipRouteData} from '../planets/common/common.types';
import {Injectable} from '@angular/core';

@Injectable({providedIn:'root'})
export class SpaceshipResolver implements Resolve<ISpaceship> {
  constructor(private spaceSvc: SpaceshipsService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ISpaceship { // or  Observable<ISpaceship> | Promise<ISpaceship> |
    return this.spaceSvc.getShip(route.params[shipRouteData]);
  }
}
