import {Component, OnInit} from '@angular/core';
import {PlanetsService} from '../common/planets.service';

@Component({
  selector: 'app-planet-votes',
  templateUrl: './planets-view.component.html',
  styleUrls: ['./planets-view.component.scss']
})
export class PlanetsViewComponent implements OnInit {
  planets: Promise<string[]> = this.planetsService.getAll();

  constructor(private planetsService:PlanetsService) {
  }

  ngOnInit() {
  }

  plantClicked(planet: string) {
    console.log(planet, 'clicked');
  }
}
