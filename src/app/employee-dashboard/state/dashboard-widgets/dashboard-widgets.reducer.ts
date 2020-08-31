import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { DashboardWidgets } from './dashboard-widgets.model';
import * as DashboardWidgetsActions from './dashboard-widgets.actions';

export const dashboardWidgetsesFeatureKey = 'dashboardWidgetses';

export interface State extends EntityState<DashboardWidgets> {
  // additional entities state properties
}

export const adapter: EntityAdapter<DashboardWidgets> = createEntityAdapter<DashboardWidgets>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});


export const reducer = createReducer(
  initialState,
  on(DashboardWidgetsActions.addDashboardWidgets,
    (state, action) => adapter.addOne(action.dashboardWidgets, state)
  ),
  on(DashboardWidgetsActions.upsertDashboardWidgets,
    (state, action) => adapter.upsertOne(action.dashboardWidgets, state)
  ),
  on(DashboardWidgetsActions.addDashboardWidgetss,
    (state, action) => adapter.addMany(action.dashboardWidgetss, state)
  ),
  on(DashboardWidgetsActions.upsertDashboardWidgetss,
    (state, action) => adapter.upsertMany(action.dashboardWidgetss, state)
  ),
  on(DashboardWidgetsActions.updateDashboardWidgets,
    (state, action) => adapter.updateOne(action.dashboardWidgets, state)
  ),
  on(DashboardWidgetsActions.updateDashboardWidgetss,
    (state, action) => adapter.updateMany(action.dashboardWidgetss, state)
  ),
  on(DashboardWidgetsActions.deleteDashboardWidgets,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(DashboardWidgetsActions.deleteDashboardWidgetss,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(DashboardWidgetsActions.loadDashboardWidgetss,
    (state, action) => adapter.setAll(action.dashboardWidgetss, state)
  ),
  on(DashboardWidgetsActions.clearDashboardWidgetss,
    state => adapter.removeAll(state)
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
