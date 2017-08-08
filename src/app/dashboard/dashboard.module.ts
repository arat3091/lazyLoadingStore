import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: 'dashboard' , pathMatch: 'full', component: DashboardComponent}])
  ],
  declarations: [DashboardComponent],
  exports: []
})
export class DashboardModule {
}
