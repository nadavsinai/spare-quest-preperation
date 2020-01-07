import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IPlanetForm, destinationPlanetRouteData, shipRouteData} from '../common/common.types';
import {SpaceshipsService} from '../../spaceships/spaceships.service';
import {ISpaceship, Kilograms} from '@algotec/spaceship-parts';
import {PlanetsService} from '../common/planets.service';

@Component({
  selector: 'app-planet-visit',
  templateUrl: './planet-visit.component.html',
  styleUrls: ['./planet-visit.component.scss']
})
export class PlanetVisitComponent implements OnInit {
  private planet: string;
  private ship: ISpaceship;
  private currentWeight: Kilograms;


  constructor(private activatedRoute: ActivatedRoute, private shipSvc: SpaceshipsService, private planetsService: PlanetsService, private router: Router) {
    this.planet = this.activatedRoute.snapshot.params[destinationPlanetRouteData];
    this.ship = this.shipSvc.myShips[this.activatedRoute.snapshot.queryParams[shipRouteData]];
    this.currentWeight = this.ship.currentLoad;
  }

  ngOnInit() {
  }

  updateWeight(currentWeight: number) {
    this.currentWeight = currentWeight;
  }

  getWeightColor() {
    const ratio = this.currentWeight / this.ship.maxLoad;
    if (ratio > 1) {
      return 'red';
    } else if (ratio > 0.8) {
      return 'yellow';
    } else {
      return 'green';
    }
  }

  onSubmitForm($event: IPlanetForm) {
    this.planetsService.addSample(this.planet, $event);
    this.router.navigate(['/planets']);
  }
}
