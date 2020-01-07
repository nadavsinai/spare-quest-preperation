import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceWrapperComponent } from './space-wrapper.component';

describe('SpaceWrapperComponent', () => {
  let component: SpaceWrapperComponent;
  let fixture: ComponentFixture<SpaceWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
