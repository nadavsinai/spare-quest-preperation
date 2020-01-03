import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    let last_known_scroll_position = 0;
    let ticking = false;

    window.addEventListener('scroll', (e) => {
      last_known_scroll_position = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(function() {
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
    });
  }
}
