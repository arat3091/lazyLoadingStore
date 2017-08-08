import { GET_FOLDERS } from './actions';
import * as fromRoot from '../../reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface MailBox {
  folderNames: Array<string>
}

export const initialState: MailBox = {
  folderNames: ['inbox']
};

export function reducer(state: MailBox = initialState, action: any): MailBox {
  switch (action.type) {
    case GET_FOLDERS:
      return Object.assign({}, state, {folderNames: action.payload});
    default:
      return state;
  }
}


export interface State extends fromRoot.State {
  'mailbox': MailBox
}

export const getMailBoxState = createFeatureSelector<MailBox>('mailbox');

export const getFolders = createSelector(getMailBoxState,
  (state: MailBox) => state.folderNames);
