import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'EmployeeDashboard', loadChildren: () => import('./employee-dashboard/employee-dashboard.module').then(m => m.EmployeeDashboardModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
