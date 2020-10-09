import { createAction, props } from '@ngrx/store';
import { Task } from '../../models/calendar.model';

export const getTasks = createAction('[Task] - Get Tasks');
export const getTasksSuccess = createAction(
    '[Task] - Get Tasks Success',
    props<{ payload: Task[] }>()
);
export const getTasksFailed = createAction(
    '[Task] - Get Tasks Failed',
    props<{ payload: string }>()
);