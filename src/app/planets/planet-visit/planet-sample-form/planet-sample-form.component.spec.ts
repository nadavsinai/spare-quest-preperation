import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetSampleFormComponent } from './planet-sample-form.component';

describe('PlanetSampleFormComponent', () => {
  let component: PlanetSampleFormComponent;
  let fixture: ComponentFixture<PlanetSampleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetSampleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetSampleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
