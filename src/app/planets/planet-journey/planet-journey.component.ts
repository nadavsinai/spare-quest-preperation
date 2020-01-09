import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ISpaceship} from '@algotec/spaceship-parts';
import {ActivatedRoute, Router} from '@angular/router';
import {SpaceshipsService} from '../../spaceships/spaceships.service';
import {destinationPlanetRouteData, shipRouteData} from '../common/common.types';
import {SpaceshipImageComponent} from '../spaceship-image/spaceship-image.component';
import {SpaceshipBoxComponent} from '../spaceship-box/spaceship-box.component';
import {removeHandlerCallback} from '../../../../js/ts/src/spaceship.interfaces';

@Component({
  selector: 'app-planet-journey',
  templateUrl: './planet-journey.component.html',
  styleUrls: ['./planet-journey.component.scss']
})
export class PlanetJourneyComponent implements OnInit, AfterViewInit, OnDestroy {
  destination: string;
  ship: ISpaceship;
  @ViewChild(SpaceshipBoxComponent, {read: ElementRef, static: true}) shipElement: ElementRef;
  @ViewChild('targetPlanet', {read: ElementRef, static: true}) targetPlanet: ElementRef;
  private destinationLeft: number;
  private currentLeft: number;
  private shipID: number;
  private from: string;
  private removeFuelEndHandler: removeHandlerCallback;

  get journeyComplete() {
    return this.ship.engine.fuelSupply.fuelLeft === 0 || this.currentLeft === this.destinationLeft;
  }

  constructor(private activatedRoute: ActivatedRoute, private spaceshipsSvc: SpaceshipsService, private router: Router) {
    this.shipID = this.activatedRoute.snapshot.params[shipRouteData];
    this.ship = this.activatedRoute.snapshot.data.ship; // using resolver
    this.from = this.activatedRoute.snapshot.params[destinationPlanetRouteData];
    this.destination = this.activatedRoute.snapshot.params[destinationPlanetRouteData];
  }

  ngOnInit() {
    this.removeFuelEndHandler = this.ship.engine.fuelSupply.onFuelEnd(() => this.spaceshipsSvc.onFuelEnd(this.shipID))
  }

  ngOnDestroy() {
    this.removeFuelEndHandler();
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
        this.destinationReached();
      }
    }
  }

  takeOff() {
    this.ship.engine.start().then(() => {
      this.currentLeft = this.shipElement.nativeElement.getBoundingClientRect().x;
      this.moveRight()
    }).catch((e: Error) => {
      console.log('failed to start engine', e.message);
    });
  }

  private async destinationReached() {
    this.currentLeft = this.destinationLeft;
    // this.spaceshipsSvc.setPosition(this.shipID, this.destination);
    await this.ship.engine.stop();
    await this.router.navigate(['planet', this.destination], {queryParams: {ship: this.shipID}});
  }

  shutDown() {
    this.ship.engine.stop().then(() => {
      console.log('engine stopped!');
    });
  }

}
