import {Component, OnInit} from '@angular/core';
import {PlanetsService} from '../common/planets.service';
import {SpaceAppState} from '../../common/state/app.state';
import {Store} from '@ngrx/store';
import {spaceShipsOwnedSelector} from '../../spaceships/state/spaceships.state';
import {Router} from '@angular/router';
import {IPlanetData} from '../common/common.types';

@Component({
  selector: 'app-planet-votes',
  templateUrl: './planets-view.component.html',
  styleUrls: ['./planets-view.component.scss']
})
export class PlanetsViewComponent implements OnInit {
  planets: Promise<IPlanetData[]> = this.planetsService.getAll();
  ships$ = this.store.select(spaceShipsOwnedSelector);
  boxOnPlanet: string;

  onDrop($event: DragEvent, planet: string) {
    $event.preventDefault();
    let ship = $event.dataTransfer.getData("text");
    console.log($event, planet, ship);
    this.router.navigate(['journey', ship, 'from', 'Earth', 'to', planet])
      .then(() => {
        console.log('resolved',arguments)
      })
    .catch(()=>{
      console.log('rejected')
    });
  };

  constructor(private planetsService: PlanetsService, private store: Store<SpaceAppState>, private router: Router) {
  }

  ngOnInit() {
  }

  onDragOver($event: DragEvent, planet: string) {
    $event.preventDefault();
    this.boxOnPlanet = planet;
  }

  onDragLeave($event: DragEvent, planet: string) {
    $event.preventDefault();
    requestAnimationFrame(() => {
      this.boxOnPlanet = '';
    })
  }
}
