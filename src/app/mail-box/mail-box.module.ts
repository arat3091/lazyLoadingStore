import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailFolderComponent } from './mail-folder/mail-folder.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';

const routes: Routes = [
  {path: '', component: MailFolderComponent}
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MailFolderComponent]
})
export class MailBoxModule {
}
