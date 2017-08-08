import { reducer, UserInfo } from './dashboard/ngrx-store/reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface State {
  userInfo: UserInfo;
}


export const reducers: ActionReducerMap<State> = {
  userInfo: reducer
};

// export const initState: State = {
//   userInfo: initialState
// };

export const getUserInfoState = createFeatureSelector<UserInfo>('userInfo');





