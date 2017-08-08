import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './reducer';
import { GetUserInfo } from './dashboard/ngrx-store/action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
  }


}
