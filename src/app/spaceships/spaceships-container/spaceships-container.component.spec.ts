import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceshipsContainerComponent } from './spaceships-container.component';
import { Store, StoreModule } from '@ngrx/store';

describe('SpaceshipsContainerComponent', () => {
  let component: SpaceshipsContainerComponent;
  let fixture: ComponentFixture<SpaceshipsContainerComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ SpaceshipsContainerComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceshipsContainerComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
