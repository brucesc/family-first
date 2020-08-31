import { InjectionToken } from '@angular/core';

export type LAZY_MODULES = {
  loadAssignmentTable: any;
  loadCountByQueue: any;
  totalLoadCount: any;
};

export const lazyMap: LAZY_MODULES = {
  loadAssignmentTable: () => import('src/app/employee-dashboard/widgets/load-assignment-table/load-assignment-table.module').then(m => m.LoadAssignmentTableModule),
  loadCountByQueue: () => import("src/app/employee-dashboard/widgets/load-count-by-queue/load-count-by-queue.module").then(m => m.LoadCountByQueueModule),
  totalLoadCount: () => import("src/app/employee-dashboard/widgets/total-load-count/total-load-count.module").then(m => m.TotalLoadCountModule),
};

export const LAZY_MODULES_MAP = new InjectionToken('LAZY_MODULES_MAP', {
  factory: () => lazyMap
});
