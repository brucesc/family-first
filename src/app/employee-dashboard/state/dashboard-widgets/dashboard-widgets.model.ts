import { Breakpoints } from '@angular/cdk/layout';

export interface DashboardWidgets {
  id: number;
  header: string;
  footer: string;
  size: Set<DashboardCardSizeByBreakpoint>;
  moduleName: string;
}

export interface DashboardCardSizeByBreakpoint {
  breakpoint: string;
  cols: number;
  rows: number
}

export const LoadAssignmentTable: DashboardWidgets = {
  id: 1,
  header: 'Load Assignments',
  footer: 'footer for this load table',
  size: new Set<DashboardCardSizeByBreakpoint>([
    { breakpoint: Breakpoints.Handset, cols: 2, rows: 1 },
    { breakpoint: Breakpoints.Large, cols: 4, rows: 2 }
  ]),
  moduleName: 'loadAssignmentTable'
}

export const LoadCountByQueue: DashboardWidgets = {
  id: 2,
  header: 'Load Count by Queue',
  footer: 'a footer for load count by queue widget',
  size: new Set<DashboardCardSizeByBreakpoint>([
    { breakpoint: Breakpoints.Handset, cols: 1, rows: 1 },
    { breakpoint: Breakpoints.Large, cols: 1, rows: 1 }
  ]),
  moduleName: 'loadCountByQueue'
}

export const TotalLoadCount: DashboardWidgets = {
  id: 3,
  header: 'Total Load Count',
  footer: 'a footer for total load count widget',
  size: new Set<DashboardCardSizeByBreakpoint>([
    { breakpoint: Breakpoints.Handset, cols: 1, rows: 1 },
    { breakpoint: Breakpoints.Large, cols: 1, rows: 1 }
  ]),
  moduleName: 'totalLoadCount'
}