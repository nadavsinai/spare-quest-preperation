import * as fromPlanets from './planets.reducer';
import { selectPlanetstate } from './planets.selectors';

describe('Planets Selectors', () => {
  it('should select the feature state', () => {
    const result = selectPlanetstate({
      [fromPlanets.planetsFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
