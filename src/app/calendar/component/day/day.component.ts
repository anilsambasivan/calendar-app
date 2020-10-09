import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';
import { Day, Task } from '../../models/calendar.model';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {
  @Input() day: Day;
  @Input() public tasks?: Task[];
  @Output() dayClicked = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  onClick(e: Event): void {
    this.dayClicked.emit(e);
  }

  getTasksFortheDay(): Task[] {
    let result =  this.tasks?.filter(t => moment(t.date).format('DD-MM-YYYY') === (moment(this.day.date).format('DD-MM-YYYY')));
    return result;
  }
}
