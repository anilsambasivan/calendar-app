import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers/calendar.reducers';

export const getTasks = createSelector(
    fromFeature.getCalendarSate,
    (state: fromFeature.CalendarState) => state.tasks
)

export const tasksLoaded = createSelector(
    fromFeature.getCalendarSate,
    (state: fromFeature.CalendarState) => state.taskLoaded
);

export const tasksLoadingError = createSelector(
    fromFeature.getCalendarSate,
    (state: fromFeature.CalendarState) => state.error
);