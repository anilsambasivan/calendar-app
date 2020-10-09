import { createFeatureSelector, createReducer, on, State } from '@ngrx/store';
import { Task } from '../../models/calendar.model';
import * as TaskActions from '../actions/calendar.actions';

export const initialState: CalendarState = {
    tasks: [],
    taskLoaded: false,
    error: ''
}

export interface CalendarState {
    tasks: Task[],
    taskLoaded: boolean
    error: string
}
export const calendarReducer = createReducer(
    initialState,
    on(TaskActions.getTasks, state => ({
        ...state,
        taskLoaded: false
    })),
    on(TaskActions.getTasksSuccess, (state, action )=> ({
        ...state,
        taskLoaded: true,
        tasks: action.payload
    })),
    on(TaskActions.getTasksFailed, (state, action )=> ({
        ...state,
        taskLoaded: true,
        error: action.payload
    }))
);

export const getCalendarSate = createFeatureSelector<CalendarState>('calendar');

