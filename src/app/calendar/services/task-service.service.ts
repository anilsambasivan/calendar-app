import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Task } from '../models/calendar.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    try {
      return this.http.get<Task[]>(this.baseUrl + '/tasks');
    } catch (error) {
      throwError(error);
    }
  }
}
