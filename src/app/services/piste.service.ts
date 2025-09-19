import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Piste } from '../models/piste.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PisteService {
  private apiUrl = `${environment.apiUrl}/piste`;

  constructor(private http: HttpClient) { }

  getAllPistes(): Observable<Piste[]> {
    return this.http.get<Piste[]>(`${this.apiUrl}/all`);
  }

  getPisteById(id: number): Observable<Piste> {
    return this.http.get<Piste>(`${this.apiUrl}/get/${id}`);
  }

  addPiste(piste: Piste): Observable<Piste> {
    return this.http.post<Piste>(`${this.apiUrl}/add`, piste);
  }

  deletePiste(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}
