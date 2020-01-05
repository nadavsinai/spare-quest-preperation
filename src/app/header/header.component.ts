import {Component, HostBinding, HostListener, OnInit} from '@angular/core';

let last_known_scroll_position = 0;
let ticking = false;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  @HostListener('window:scroll') onScrollEvent(event: Event) {
    last_known_scroll_position = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(function () {
        // doSomething(last_known_scroll_position);
        if (last_known_scroll_position < 150) {
          document.querySelector('#nav').classList.remove('visible-nav');
        } else {
          document.querySelector('#nav').classList.add('visible-nav');
        }

        ticking = false;
      });

      ticking = true;
    }
  }

  ngOnInit() {
  }

}
