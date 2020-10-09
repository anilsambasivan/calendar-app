import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromReducer from './reducers/calendar.reducers';
import * as fromSelector from './selectors/calendar.selectors';
import * as CalendarActions from './actions/calendar.actions';

@Injectable({ providedIn: 'root' })
export class CalendarFacade {
    tasks$ = this.store.pipe(select(fromSelector.getTasks));
    error$ = this.store.pipe(select(fromSelector.tasksLoadingError));

    constructor(private store: Store<fromReducer.CalendarState>) {}

    getTasks() {
        this.store.dispatch(CalendarActions.getTasks());
    } 
}