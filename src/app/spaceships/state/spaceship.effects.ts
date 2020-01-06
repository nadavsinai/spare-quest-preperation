import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {buySpaceship, createSpaceship, createSpaceshipFailed, createSpaceshipSuccess} from './spaceship.actions';
import {catchError, concatMap, map, mergeMap} from 'rxjs/operators';
import {WithdrawAction} from '../../common/state/balance.state';
import {SpaceshipsService} from '../spaceships.service';
import {ISpaceship} from '@algotec/spaceship-parts';
import {from, of} from 'rxjs';


@Injectable()
export class SpaceshipEffects {

  buyLogic = createEffect(() => this.actions$.pipe(
    ofType(buySpaceship),
    concatMap((action) => {
      return [
        new WithdrawAction(action.ship.price),
        createSpaceship({ship: action.ship})
      ];
    })
  ));

  createShip = createEffect(() =>
    this.actions$.pipe(
      ofType(createSpaceship),
      mergeMap(action => from(this.spaceshipService.constructSpaceShip(action.ship)).pipe(
        map((ship: ISpaceship) => {
          return createSpaceshipSuccess({ship});
        }),
        catchError((err: Error) => {
          return of(createSpaceshipFailed({ship: action.ship, error: err}));
        })
      )),
    ));

  constructor(private actions$: Actions, private spaceshipService: SpaceshipsService) {
  }

}
