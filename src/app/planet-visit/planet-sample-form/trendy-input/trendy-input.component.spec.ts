import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendyInputComponent } from './trendy-input.component';

describe('TrendyInputComponent', () => {
  let component: TrendyInputComponent;
  let fixture: ComponentFixture<TrendyInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendyInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendyInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
