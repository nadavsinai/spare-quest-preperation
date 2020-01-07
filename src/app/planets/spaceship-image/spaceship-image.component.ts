import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-spaceship-image',
  templateUrl: './spaceship-image.component.html',
  styleUrls: ['./spaceship-image.component.scss']
})
export class SpaceshipImageComponent implements OnInit {
  @Input() ship: string = 'apollo';

  constructor() {
  }

  ngOnInit() {
  }

  getImageFor(ship: string = 'appolo') {
    return `/assets/images/${ship.toLowerCase()}.png`
  }
}
