import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import * as CalendarActions from '../actions/calendar.actions'
import { TaskService } from '../../services/task-service.service'
import { catchError, filter, map, switchMap, withLatestFrom } from 'rxjs/operators'
import { Store } from '@ngrx/store';
import { CalendarState } from '../reducers/calendar.reducers';
import { tasksLoaded } from '../selectors/calendar.selectors';
import { Task } from '../../models/calendar.model';
import { of } from 'rxjs';

@Injectable()
export class CalendarEffects {
    @Effect()
    getTasks$ = createEffect(() => this.actions$.pipe(
        ofType(CalendarActions.getTasks),
        withLatestFrom(this.store.select(tasksLoaded)),
        filter(([action, tasksLoaded]) => {
            console.log(tasksLoaded);
            return !tasksLoaded;
        }),
        switchMap(() => {
            return this.service.getTasks();
        }),
        catchError((error: Error) => {
           return of(CalendarActions.getTasksFailed({payload: error.message}));
        }),
        map((tasks: Task[]) => {
            return CalendarActions.getTasksSuccess({payload: tasks});
        }),
    ));

    constructor(private actions$: Actions, private service: TaskService, private store: Store<CalendarState>) {}
}

export const calendarEffects: any[] = [CalendarEffects];