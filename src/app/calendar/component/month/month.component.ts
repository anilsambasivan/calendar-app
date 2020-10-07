import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Month } from '../../models/calendar.model';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MonthComponent implements OnInit {
  @Input() month: Month;
  @Output() onDayClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  onClick(e: Event): void {
    this.onDayClick.emit(e);
  }
}
