import { Action } from '@ngrx/store';

export const GET_FOLDERS = '[folders] get';

export class GetFolderNames implements Action {
  readonly type = GET_FOLDERS;

  constructor(public payload?: any) {
  }
}

