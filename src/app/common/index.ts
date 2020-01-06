import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {balanceReducer} from './state/balance.state';
import {SpaceAppState} from './state/app.state';


export const reducers: ActionReducerMap<SpaceAppState> = {
  balance:balanceReducer
};


export const metaReducers: MetaReducer<SpaceAppState>[] = !environment.production ? [] : [];
