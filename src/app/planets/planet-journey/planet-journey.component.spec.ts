import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetJourneyComponent } from './planet-journey.component';

describe('PlanetJourneyComponent', () => {
  let component: PlanetJourneyComponent;
  let fixture: ComponentFixture<PlanetJourneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetJourneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
