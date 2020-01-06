import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SpaceshipEffects } from './spaceship.effects';

describe('SpaceshipEffects', () => {
  let actions$: Observable<any>;
  let effects: SpaceshipEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SpaceshipEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<SpaceshipEffects>(SpaceshipEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
