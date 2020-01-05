import {Component, HostBinding, HostListener, OnInit} from '@angular/core';
import {fromEvent} from 'rxjs';
import {subscribeOn} from 'rxjs/operators';
import {animationFrameScheduler} from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  showBlackBg: boolean = false;


  ngOnInit() {
    fromEvent(window, 'scroll').pipe(subscribeOn(animationFrameScheduler)).subscribe((event: Event) => {
      this.showBlackBg = (window.scrollY > 120)
    });
  }

}
