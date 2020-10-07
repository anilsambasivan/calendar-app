import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Week } from '../../models/calendar.model';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WeekComponent implements OnInit {
  @Input() week: Week;
  @Output() onDayClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(e: Event): void {
    this.onDayClick.emit(e);
  }
}
