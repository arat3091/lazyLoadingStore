import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class FolderService {

  constructor() {
  }

  getFolders(): Observable<Array<string>> {
    return Observable.of(['inbox', 'trash', 'sent', 'imp', 'another']);
  }

}
