import { Action } from '@ngrx/store';

export const GET_USER_INFO = '[user] info';

export class GetUserInfo implements Action {
  readonly type = GET_USER_INFO;

  constructor(public payload ?: any) {
  }
}
