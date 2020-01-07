import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceshipImageComponent } from './spaceship-image.component';

describe('SpaceshipImageComponent', () => {
  let component: SpaceshipImageComponent;
  let fixture: ComponentFixture<SpaceshipImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceshipImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceshipImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
