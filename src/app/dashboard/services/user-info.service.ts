import { Injectable } from '@angular/core';
import { UserInfo } from '../ngrx-store/reducer';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class UserInfoService {

  constructor() {
  }

  public getUserInfo(): Observable<UserInfo> {
    return Observable.of({name: 'ankur', company: 'test', postcode: 'test'});
  }

}
