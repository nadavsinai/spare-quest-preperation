import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-planet-votes',
  templateUrl: './planet-votes.component.html',
  styleUrls: ['./planet-votes.component.scss']
})
export class PlanetVotesComponent implements OnInit {
  planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

  constructor() {
  }

  ngOnInit() {
  }

}
