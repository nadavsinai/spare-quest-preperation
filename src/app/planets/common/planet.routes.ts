import {planetRouteData, shipRouteData} from './common.types';
import {PlanetVisitComponent} from '../planet-visit/planet-visit.component';
import {Routes} from '@angular/router';
import {PlanetsViewComponent} from '../planets-view/planets-view.component';
import {PlanetJourneyComponent} from '../planet-journey/planet-journey.component';

export const planetRoutes: Routes = [
  {path: 'planets', component: PlanetsViewComponent},
  {path: `planet/:${planetRouteData}`, component: PlanetVisitComponent},
  {path: `journey/:${shipRouteData}/to/:${planetRouteData}`, component: PlanetJourneyComponent}
];
