import { Task } from '../models/calendar.model';

export const TASKS: Task[] = [
  new Task({
    id: 1,
    title: 'Emids Founding Day',
    date: '2020-10-10',
    startTime: '14:00',
    endTime: '17:30'
  }),
  new Task({
    id: 2,
    title: 'Team 126 - Greenway Health - Scrum Call',
    date: '2020-10-12',
    startTime: '10:00',
    endTime: '10:30'
  }),
  new Task({
    id: 3,
    title: 'Greenway Health - All Hands',
    date: '2020-10-14',
    startTime: '12:00',
    endTime: '13:00'
  }),
  new Task({
    id: 4,
    title: 'Anil on PTO',
    date: '2020-10-15',
    startTime: '00:00',
    endTime: '11:59'
  }),
  new Task({
    id: 5,
    title: 'Team 126 - Greenway Health - Retrospective',
    date: '2020-10-12',
    startTime: '10:00',
    endTime: '10:30'
  }),
  new Task({
    id: 6,
    title: 'Greenway Health - Team Lunch',
    date: '2020-10-14',
    startTime: '12:00',
    endTime: '13:00'
  })
];
