import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {balanceReducer} from './balance.state';
import {SpaceAppState} from './app.state';


export const reducers: ActionReducerMap<SpaceAppState> = {
  balance:balanceReducer
};


export const metaReducers: MetaReducer<SpaceAppState>[] = !environment.production ? [] : [];
