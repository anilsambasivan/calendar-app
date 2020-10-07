import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';
import { HeaderComponent } from './component/header/header.component';
import { MonthComponent } from './component/month/month.component';
import { WeekComponent } from './component/week/week.component';
import { DayComponent } from './component/day/day.component';
import { EventDetailComponent } from './component/event-detail/event-detail.component';
import { WeekHeaderComponent } from './component/week-header/week-header.component';
import { TaskComponent } from './component/task/task.component';

@NgModule({
  declarations: [CalendarComponent,
    HeaderComponent,
    MonthComponent,
    WeekComponent,
    DayComponent,
    TaskComponent,
    EventDetailComponent,
    WeekHeaderComponent],
  imports: [
    CommonModule,
    CalendarRoutingModule,
  ]
})
export class CalendarModule { }
