import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {planetRouteData, shipRouteData} from '../common/common.types';
import {SpaceshipsService} from '../../spaceships/spaceships.service';
import { ISpaceship } from '@algotec/spaceship-parts';

@Component({
  selector: 'app-planet-visit',
  templateUrl: './planet-visit.component.html',
  styleUrls: ['./planet-visit.component.scss']
})
export class PlanetVisitComponent implements OnInit {
  private planet: string;
  private ship: ISpaceship;

  constructor(private activatedRoute: ActivatedRoute,private shipSvc:SpaceshipsService) {
    this.planet = this.activatedRoute.snapshot.params[planetRouteData];
    this.ship = this.shipSvc.myShips[this.activatedRoute.snapshot.queryParams[shipRouteData]];
  }

  ngOnInit() {
  }

}
