import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {PlanetJourneyComponent} from '../planets/planet-journey/planet-journey.component';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class JourneyDeactivationGuard implements CanDeactivate<PlanetJourneyComponent> {

  canDeactivate(component: PlanetJourneyComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.journeyComplete;
  }

}
