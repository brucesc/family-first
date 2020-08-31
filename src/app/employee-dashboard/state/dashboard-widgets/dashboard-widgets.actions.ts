import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { DashboardWidgets } from './dashboard-widgets.model';

export const loadDashboardWidgetss = createAction(
  '[DashboardWidgets/API] Load DashboardWidgetss', 
  props<{ dashboardWidgetss: DashboardWidgets[] }>()
);

export const addDashboardWidgets = createAction(
  '[DashboardWidgets/API] Add DashboardWidgets',
  props<{ dashboardWidgets: DashboardWidgets }>()
);

export const upsertDashboardWidgets = createAction(
  '[DashboardWidgets/API] Upsert DashboardWidgets',
  props<{ dashboardWidgets: DashboardWidgets }>()
);

export const addDashboardWidgetss = createAction(
  '[DashboardWidgets/API] Add DashboardWidgetss',
  props<{ dashboardWidgetss: DashboardWidgets[] }>()
);

export const upsertDashboardWidgetss = createAction(
  '[DashboardWidgets/API] Upsert DashboardWidgetss',
  props<{ dashboardWidgetss: DashboardWidgets[] }>()
);

export const updateDashboardWidgets = createAction(
  '[DashboardWidgets/API] Update DashboardWidgets',
  props<{ dashboardWidgets: Update<DashboardWidgets> }>()
);

export const updateDashboardWidgetss = createAction(
  '[DashboardWidgets/API] Update DashboardWidgetss',
  props<{ dashboardWidgetss: Update<DashboardWidgets>[] }>()
);

export const deleteDashboardWidgets = createAction(
  '[DashboardWidgets/API] Delete DashboardWidgets',
  props<{ id: string }>()
);

export const deleteDashboardWidgetss = createAction(
  '[DashboardWidgets/API] Delete DashboardWidgetss',
  props<{ ids: string[] }>()
);

export const clearDashboardWidgetss = createAction(
  '[DashboardWidgets/API] Clear DashboardWidgetss'
);
