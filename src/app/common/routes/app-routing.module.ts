import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {appRootRoutes} from './app.routes';


@NgModule({
  imports: [RouterModule.forRoot(appRootRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
