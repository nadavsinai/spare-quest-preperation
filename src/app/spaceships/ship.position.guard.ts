import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {SpaceshipsService} from './spaceships.service';
import {ISpaceship} from '@algotec/spaceship-parts';
import {fromPlanetRouteData} from '../planets/common/common.types';
import {Injectable} from '@angular/core';
import {SpaceshipResolver} from './spaceship.resolver';

@Injectable({providedIn: 'root'})
export class ShipPositionGuard implements CanActivate {

  constructor(private spaceSvc: SpaceshipsService,private shipResolver:SpaceshipResolver ) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const ship: ISpaceship =this.shipResolver.resolve(route,state);
    const position = this.spaceSvc.getPosition(ship);
    if (ship && position) {
      return position.anchorPlanet === route.params[fromPlanetRouteData];
    }
    return false; // can also redirect back or somewhere else using a UrlTree made with Router.parseUrl();
  }
}
