import {planetRouteData} from './common/common.types';
import {PlanetVisitComponent} from './planet-visit/planet-visit.component';
import {Routes} from '@angular/router';

export const planetRoutes:Routes = [
  {path: `planet/:${planetRouteData}`, component: PlanetVisitComponent}
];
