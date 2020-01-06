import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as PlanetsActions from './planets.actions';



@Injectable()
export class PlanetsEffects {

  loadPlanets$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(PlanetsActions.loadPlanets),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => PlanetsActions.loadPlanetsSuccess({ data })),
          catchError(error => of(PlanetsActions.loadPlanetsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
