import {Component, HostBinding, HostListener, OnInit} from '@angular/core';
import {fromEvent} from 'rxjs';
import {subscribeOn} from 'rxjs/operators';
import {animationFrameScheduler} from 'rxjs';
import {balanceSelector} from '../reducers/balance.state';
import {SpaceAppState} from '../reducers/app.state';
import {Store} from '@ngrx/store';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private store:Store<SpaceAppState>) {
  }

  showBlackBg: boolean = false;
  currentBalance$ = this.store.select(balanceSelector);

  ngOnInit() {
    fromEvent(window, 'scroll').pipe(subscribeOn(animationFrameScheduler)).subscribe((event: Event) => {
      this.showBlackBg = (window.scrollY > 120)
    });
  }

}
