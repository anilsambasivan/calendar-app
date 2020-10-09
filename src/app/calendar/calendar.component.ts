import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { CalendarHelper } from './helpers/calendar.helper';
import { Month, Task } from './models/calendar.model';
import { CalendarFacade } from './store/calendar.facade';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CalendarComponent implements OnInit {
  public month: Month;
  public tasks$: Observable<Task[]>;
  public showTaskDetails: boolean;
  private currentDate: moment.Moment;
  constructor(private service: CalendarFacade) {
    this.month = CalendarHelper.getCalendarMonth(moment(this.currentDate).subtract(0, 'months'));
  }

  ngOnInit(): void {
    this.service.getTasks();
    this.tasks$ = this.service.tasks$;
    this.tasks$ .subscribe((x) => {
      console.log(x);
    });
    this.service.error$.subscribe((x) => {
      console.log(x);
    });
  }

  onClick(e: Event): void {
    this.showTaskDetails = !this.showTaskDetails;
  }

  onToday(): void {
  }

  onNext(): void {
    this.nextMonth();
  }

  onPrevious(): void {
    this.prevMonth();
  }

  public prevMonth(): void {
  }

  public nextMonth(): void {
  }
}
