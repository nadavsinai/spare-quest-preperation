import {Route} from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';

export const plantsAppRoutes: Route[] = [
  {path: '', redirectTo: '/planets', pathMatch: 'full'},
  {path: "**", component: NotFoundComponent}
];
