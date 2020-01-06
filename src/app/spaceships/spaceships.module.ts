import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {spaceShipReducer, SPACESHIPS_FEATURE_NAME} from './state/spaceships.state';
import {SpaceshipsContainerComponent} from './spaceships-container/spaceships-container.component';
import {RouterModule} from '@angular/router';
import {SpaceshipsMarketComponent} from './spaceships-market/spaceships-market.component';
import { EffectsModule } from '@ngrx/effects';
import { SpaceshipEffects } from './state/spaceship.effects';
import { SpaceshipsWrapperComponent } from './spaceships-wrapper/spaceships-wrapper.component';


@NgModule({
  declarations: [SpaceshipsContainerComponent, SpaceshipsMarketComponent, SpaceshipsWrapperComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(SPACESHIPS_FEATURE_NAME, spaceShipReducer),
    RouterModule.forChild([{path: SPACESHIPS_FEATURE_NAME, component: SpaceshipsContainerComponent}]),
    EffectsModule.forFeature([SpaceshipEffects])
  ]
})

export class SpaceshipsModule {}
