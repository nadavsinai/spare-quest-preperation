import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {
  @Input() planetName: string;

  constructor() { }

  ngOnInit() {
  }

}
