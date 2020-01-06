import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {spaceShipReducer} from './spaceships.state';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('spaceships', spaceShipReducer)
]
})

export class SpaceshipsModule {}
