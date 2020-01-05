import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {planetRouteData} from '../common/common.types';

@Component({
  selector: 'app-planet-visit',
  templateUrl: './planet-visit.component.html',
  styleUrls: ['./planet-visit.component.scss']
})
export class PlanetVisitComponent implements OnInit {
  private planet: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.planet = this.activatedRoute.snapshot.params[planetRouteData];
  }

  ngOnInit() {
  }

}
