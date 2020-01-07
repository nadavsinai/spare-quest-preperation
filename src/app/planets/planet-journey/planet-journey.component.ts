import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ISpaceship} from '@algotec/spaceship-parts';
import {ActivatedRoute, Router} from '@angular/router';
import {SpaceshipsService} from '../../spaceships/spaceships.service';
import {planetRouteData, shipRouteData} from '../common/common.types';
import {SpaceshipImageComponent} from '../spaceship-image/spaceship-image.component';
import {SpaceshipBoxComponent} from '../spaceship-box/spaceship-box.component';

@Component({
  selector: 'app-planet-journey',
  templateUrl: './planet-journey.component.html',
  styleUrls: ['./planet-journey.component.scss']
})
export class PlanetJourneyComponent implements OnInit, AfterViewInit {
  destination: string;
  ship: ISpaceship;
  @ViewChild(SpaceshipBoxComponent, {read: ElementRef, static: true}) shipElement: ElementRef;
  @ViewChild('targetPlanet', {read: ElementRef, static: true}) targetPlanet: ElementRef;
  private destinationLeft: number;
  private currentLeft: number;
  private shipID: number;

  constructor(private activatedRoute: ActivatedRoute, private spaceshipsSvc: SpaceshipsService, private router: Router) {
    this.shipID = this.activatedRoute.snapshot.params[shipRouteData];
    this.ship = this.spaceshipsSvc.myShips[this.shipID]; // could be get from store by selector
    this.destination = this.activatedRoute.snapshot.params[planetRouteData];
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.destinationLeft = this.targetPlanet.nativeElement.getBoundingClientRect().x;
  }

  moveRight() {
    if (this.ship.engine.started) {
      if (this.currentLeft < this.destinationLeft) {
        this.shipElement.nativeElement.style.left = this.currentLeft + 2 + 'px';
        this.currentLeft = this.currentLeft + 2;
        requestAnimationFrame(() => {
          this.moveRight();
        });
      } else {
        this.destinationReached()
      }
    }
  }

  takeOff() {
    this.ship.engine.start().then(() => {
      this.currentLeft = this.shipElement.nativeElement.getBoundingClientRect().x;
      this.moveRight()
    });
  }

  private destinationReached() {
    this.router.navigate(['planet', this.destination], {queryParams: {ship: this.shipID}})
  }

  shutDown() {
    this.ship.engine.stop().then(() => {
      console.log('engine stopped!');
    });
  }

}
