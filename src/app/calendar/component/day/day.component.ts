import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Day } from '../../models/calendar.model';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {
  @Input() day: Day;
  @Output() dayClicked = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  onClick(e: Event): void {
    this.dayClicked.emit(e);
  }
}
