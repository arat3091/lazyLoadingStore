import { Component, OnInit } from '@angular/core';
import { getUserInfoState, State } from '../../reducer';
import { Store } from '@ngrx/store';
import { UserInfoService } from '../services/user-info.service';
import { GetUserInfo } from '../ngrx-store/action';
import { UserInfo } from '../ngrx-store/reducer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userInfo: UserInfo;

  constructor(private store: Store<State>, private userInfoService: UserInfoService) {
  }

  ngOnInit() {
    this.userInfoService.getUserInfo()
      .subscribe(
        userInfo => this.store.dispatch(new GetUserInfo(userInfo))
      );

    this.store.select(getUserInfoState)
      .subscribe(
        userInfo => this.userInfo = userInfo
      );

  }

}
