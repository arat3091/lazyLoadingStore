import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getFolders, State } from '../ngrx-store/reducer';
import { FolderService } from '../folder.service';
import { GetFolderNames } from '../ngrx-store/actions';

@Component({
  selector: 'app-mail-folder',
  templateUrl: './mail-folder.component.html',
  styleUrls: ['./mail-folder.component.css']
})
export class MailFolderComponent implements OnInit {

  folders: Array<string>;

  constructor(private store: Store<State>, private folderService: FolderService) {
  }

  ngOnInit() {
    this.folderService.getFolders()
      .subscribe(
        folders => this.store.dispatch(new GetFolderNames(folders))
      );

    this.store.select(getFolders)
      .subscribe(
        folders => this.folders = folders
      );
  }

 
  
}
