import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PlanetsEffects } from './planets.effects';

describe('PlanetsEffects', () => {
  let actions$: Observable<any>;
  let effects: PlanetsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PlanetsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<PlanetsEffects>(PlanetsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
