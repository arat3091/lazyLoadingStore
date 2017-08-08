import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { UserInfoService } from './services/user-info.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: 'dashboard', pathMatch: 'full', component: DashboardComponent}])
  ],
  declarations: [DashboardComponent],
  providers: [UserInfoService],
  exports: []
})
export class DashboardModule {
}
