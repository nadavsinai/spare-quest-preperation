import { TestBed } from '@angular/core/testing';

import { SpaceshipsService } from './spaceships.service';

describe('SpaceshipsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpaceshipsService = TestBed.get(SpaceshipsService);
    expect(service).toBeTruthy();
  });
});
