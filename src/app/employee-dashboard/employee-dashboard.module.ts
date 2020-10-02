import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeDashboardRoutingModule } from './employee-dashboard-routing.module';
import { EmployeeDashboardComponent } from './employee-dashboard.component';
import { StoreModule } from '@ngrx/store';
import * as fromEmployeeDashboard from './state';
import { DashboardGridComponent } from './dashboard-grid/dashboard-grid.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { DynamicWidgetLoaderDirective } from './widgets/dynamic-widget-loader.directive';

@NgModule({
  declarations: [
    EmployeeDashboardComponent,
    DashboardGridComponent,
    DynamicWidgetLoaderDirective,
  ],
  imports: [
    CommonModule,
    EmployeeDashboardRoutingModule,
    StoreModule.forFeature(
      fromEmployeeDashboard.employeeDashboardFeatureKey,
      fromEmployeeDashboard.reducers,
      { metaReducers: fromEmployeeDashboard.metaReducers }
    ),
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
  ]
})
export class EmployeeDashboardModule { }
