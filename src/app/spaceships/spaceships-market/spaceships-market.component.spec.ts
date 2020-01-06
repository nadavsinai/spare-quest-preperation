import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceshipsMarketComponent } from './spaceships-market.component';

describe('SpaceshipsViewComponent', () => {
  let component: SpaceshipsMarketComponent;
  let fixture: ComponentFixture<SpaceshipsMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceshipsMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceshipsMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
