import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Instructor } from '../models/instructor.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {
  private apiUrl = `${environment.apiUrl}/instructor`;

  constructor(private http: HttpClient) { }

  getAllInstructors(): Observable<Instructor[]> {
    return this.http.get<Instructor[]>(`${this.apiUrl}/all`);
  }

  getInstructorById(id: number): Observable<Instructor> {
    return this.http.get<Instructor>(`${this.apiUrl}/get/${id}`);
  }

  addInstructor(instructor: Instructor): Observable<Instructor> {
    return this.http.post<Instructor>(`${this.apiUrl}/add`, instructor);
  }

  updateInstructor(instructor: Instructor): Observable<Instructor> {
    return this.http.put<Instructor>(`${this.apiUrl}/update`, instructor);
  }

  addInstructorAndAssignToCourse(instructor: Instructor, courseId: number): Observable<Instructor> {
    return this.http.put<Instructor>(`${this.apiUrl}/addAndAssignToCourse/${courseId}`, instructor);
  }
}




