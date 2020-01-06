import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {SpaceshipsService} from '../spaceships.service';
import {balanceSelector} from '../../common/state/balance.state';
import { ISpaceship } from '@algotec/spaceship-parts';
import {buySpaceship} from '../state/spaceship.actions';
import {spaceShipsOwnedSelector} from '../state/spaceships.state';

@Component({
  selector: 'app-spaceships-container',
  templateUrl: './spaceships-container.component.html',
  styleUrls: ['./spaceships-container.component.scss']
})
export class SpaceshipsContainerComponent implements OnInit {
  shipsAvailable$ = this.spaceShipSvc.shipsAvailable$;
  balance$ = this.store.select(balanceSelector);
  myShips$ = this.store.select(spaceShipsOwnedSelector);

  constructor(private store: Store<any>, private spaceShipSvc: SpaceshipsService) {
  }

  ngOnInit() {
  }

  buyShip(spaceship: ISpaceship) {
    this.store.dispatch(buySpaceship({ship:spaceship}));
  }
}
