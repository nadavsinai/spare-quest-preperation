import {Action, createAction, createFeatureSelector, on, props, union} from '@ngrx/store';
import {SpaceAppState} from './app.state';

export enum BalanceActionTypes {
  DEPOSIT = '[balance] DEPOSIT',
  WITHDRAW = '[balance] WITHDRAW'
}

export class DepositAction implements Action {
  readonly type = BalanceActionTypes.DEPOSIT;

  constructor(public amount: number) {
  }
}

export class WithdrawAction implements Action {
  readonly type = BalanceActionTypes.WITHDRAW;

  constructor(public amount: number) {
  }
}

export type balanceActions = WithdrawAction | DepositAction;
const initialBalance = 100_000_000
export function balanceReducer(balance: number = initialBalance, action: balanceActions) {
  switch (action.type) {
    case BalanceActionTypes.WITHDRAW:
      return balance - action.amount;
      break;
    case BalanceActionTypes.DEPOSIT:
      return balance + action.amount;
      break;
  }
  return balance;

}

export const balanceSelector = createFeatureSelector<SpaceAppState>('balance');
