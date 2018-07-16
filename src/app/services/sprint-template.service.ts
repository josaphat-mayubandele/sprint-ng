import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthService } from '../auth/auth.service';
import { SprintTemplate } from '../models/sprint-template.model';

@Injectable({
  providedIn: 'root'
})
export class SprintTemplateService {
  private apiUrl = 'http://localhost:3000/api/v1/sprintTemplate';
  constructor(private http: HttpClient, private auth: AuthService) {}

  get(): Observable<SprintTemplate[]> {
    console.log(this.auth.userId());
    // recevoir les sprint de l'utilisateur current
    return this.http.get<SprintTemplate[]>(`${this.apiUrl}/get`, {
      headers: new HttpHeaders().set(
        'Authorization',
        `Bearer ${localStorage.getItem('access_token')}`
      )
    });
  }

  add() {}
  deleteAll() {}
}
