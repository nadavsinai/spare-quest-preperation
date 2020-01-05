import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetVotesComponent } from './planet-votes.component';

describe('PlanetVotesComponent', () => {
  let component: PlanetVotesComponent;
  let fixture: ComponentFixture<PlanetVotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetVotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetVotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
