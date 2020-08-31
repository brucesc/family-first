import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromDashboardWidgets from './dashboard-widgets/dashboard-widgets.reducer';

export const employeeDashboardFeatureKey = 'employeeDashboard';

export interface State {

  [fromDashboardWidgets.dashboardWidgetsesFeatureKey]: fromDashboardWidgets.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromDashboardWidgets.dashboardWidgetsesFeatureKey]: fromDashboardWidgets.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
