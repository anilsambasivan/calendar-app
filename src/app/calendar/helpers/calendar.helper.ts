import * as moment from 'moment';
import * as range from 'lodash.range';
import { Day, Month, Week } from '../models/calendar.model';

export class CalendarHelper {
  public static getFilledDays(currentMoment: moment.Moment): Day[] {
    const firstOfMonth = moment(currentMoment).startOf('month').day();
    const lastOfMonth = moment(currentMoment).endOf('month').day();

    const firstDayOfGrid = moment(currentMoment).startOf('month').subtract(firstOfMonth, 'days');
    const lastDayOfGrid = moment(currentMoment).endOf('month').subtract(lastOfMonth, 'days').add(7, 'days');

    const startCalendar = firstDayOfGrid.date();

    return range(startCalendar, startCalendar + lastDayOfGrid.diff(firstDayOfGrid, 'days')).map((date, index: number): Day =>  {
      const newDate = moment(firstDayOfGrid).date(date);
      return {
        id: index,
        today: moment().isSame(moment(newDate), 'day'),
        selected: moment(newDate).isSame(moment(), 'day'),
        day: newDate,
      };
    });
  }

  public static getCalendarMonth(date: moment.Moment): Month {
    const days = this.getFilledDays(date);
    const weeks : Week[] = [];
    let index = 0;

    while (days.length > 0) {
      weeks.push({
        days: days.splice(0, 7),
        id: index
      });
      index++;
    }

    return {
      weeks: weeks
    }
  }

  public static getRandomColor(): string {
    return '#'+Math.random().toString(16).substr(-6);
  }
}
