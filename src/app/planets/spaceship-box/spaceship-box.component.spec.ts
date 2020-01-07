import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceshipBoxComponent } from './spaceship-box.component';

describe('SpaceshipBoxComponent', () => {
  let component: SpaceshipBoxComponent;
  let fixture: ComponentFixture<SpaceshipBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceshipBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceshipBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
