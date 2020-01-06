import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsViewComponent } from './planets-view.component';

describe('PlanetVotesComponent', () => {
  let component: PlanetsViewComponent;
  let fixture: ComponentFixture<PlanetsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
