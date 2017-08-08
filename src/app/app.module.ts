import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard'},
  { path: 'mailbox', loadChildren: 'app/mail-box/mail-box.module#MailBoxModule'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    DashboardModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
