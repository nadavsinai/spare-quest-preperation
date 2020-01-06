import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceshipsWrapperComponent } from './spaceships-wrapper.component';

describe('SpaceshipsWarpperComponent', () => {
  let component: SpaceshipsWrapperComponent;
  let fixture: ComponentFixture<SpaceshipsWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceshipsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceshipsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
