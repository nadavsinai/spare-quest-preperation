import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {SpaceAppState} from '../state/app.state';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(store: Store<SpaceAppState>) {
    if (!environment.production) {
      store.subscribe(state => {
        (window as any).AppState = state;
      });
    }

  }
}
