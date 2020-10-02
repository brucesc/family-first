import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/Employee'
  },
  { 
    path: 'Employee', 
    loadChildren: () => import('./employee-dashboard/employee-dashboard.module').then(m => m.EmployeeDashboardModule) 
  },
  {
    path: '**',
    redirectTo: '/Employee'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
