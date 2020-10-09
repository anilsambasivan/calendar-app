import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/calendar.model';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  @Input() public task?: Task;

  constructor() { }

  ngOnInit(): void {
  }

}
