import * as moment from 'moment';

export class Day {
  id: number;
  day: moment.Moment;
  selected: boolean;
  today: boolean;
  tasks?: Task[];
}

export class Week {
  id: number;
  days: Day[];
}

export class Month {
  weeks: Week[];
  currentMonth?: string;
}

export class Task {
  id?: number;
  title?: string;
  date?: string;
  startTime?: string;
  endTime?: string;
  description?: string;

  constructor(object?: Task) {
    if(!object) return;

    this.date = object.date;
    this.title = object.title;
    this.id = object.id;
    this.startTime = object.startTime;
    this.endTime = object.endTime;
    this.description = object.description;
  }
}
