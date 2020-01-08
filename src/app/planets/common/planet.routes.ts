import {destinationPlanetRouteData, fromPlanetRouteData, shipRouteData} from './common.types';
import {PlanetVisitComponent} from '../planet-visit/planet-visit.component';
import {Routes} from '@angular/router';
import {PlanetsViewComponent} from '../planets-view/planets-view.component';
import {PlanetJourneyComponent} from '../planet-journey/planet-journey.component';
import {SpaceshipResolver} from '../../spaceships/spaceship.resolver';
import {ShipPositionGuard} from '../../spaceships/ship.position.guard';
import {JourneyDeactivationGuard} from '../../spaceships/journeyDeactivationGuard';

export const planetRoutes: Routes = [
  {path: 'planets', component: PlanetsViewComponent},
  {path: `planet/:${destinationPlanetRouteData}`, component: PlanetVisitComponent},
  {
    path: `journey/:${shipRouteData}/from/:${fromPlanetRouteData}/to/:${destinationPlanetRouteData}`,
    resolve: {ship: SpaceshipResolver},
    canActivate: [ShipPositionGuard],
    canDeactivate:[JourneyDeactivationGuard],
    component: PlanetJourneyComponent
  }
];
