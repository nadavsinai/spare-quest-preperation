import {Route} from '@angular/router';
import {MainComponent} from './main/main.component';
import {PlanetVisitComponent} from './planet-visit/planet-visit.component';
import {planetRouteData} from './common/common.types';

export const plantsAppRoutes: Route[] = [
  {path: '', component: MainComponent},
  {path: `planet/:${planetRouteData}`, component: PlanetVisitComponent}
];
