import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetVisitComponent } from './planet-visit.component';

describe('PlanetVisitComponent', () => {
  let component: PlanetVisitComponent;
  let fixture: ComponentFixture<PlanetVisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetVisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
