import {Route} from '@angular/router';
import {MainComponent} from './main/main.component';

export const plantsAppRoutes: Route[] = [
  {path: '', component: MainComponent},
  // {path: 'planet/:planetName':component:PlanetVisitComponent}
];
