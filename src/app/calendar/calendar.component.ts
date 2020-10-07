import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as moment from 'moment';
import { CalendarHelper } from './helpers/calendar.helper';
import { Month } from './models/calendar.model';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CalendarComponent implements OnInit {
  public month: Month;
  public showTaskDetails: boolean;
  private currentDate: moment.Moment;
  constructor() {
    this.month = CalendarHelper.getCalendarMonth(moment(this.currentDate).subtract(0, 'months'));
    console.log(this.month);
  }

  ngOnInit(): void {
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
