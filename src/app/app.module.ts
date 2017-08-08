import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/dashboard'},
  {path: 'mailbox', loadChildren: 'app/mail-box/mail-box.module#MailBoxModule'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    DashboardModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({maxAge: 50}),
  ],
  exports: [RouterModule, StoreModule, FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
