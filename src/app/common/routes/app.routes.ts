import {Route} from '@angular/router';
import {NotFoundComponent} from '../../not-found/not-found.component';

export const appRootRoutes: Route[] = [
  {path: '', redirectTo: 'planets', pathMatch: 'full'},
  {path: '404', component: NotFoundComponent},
];
