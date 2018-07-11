import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthService } from '../auth/auth.service';
import { PastSprints } from '../models/past-sprint.model';
import { SprintTemplate } from '../models/sprint-template.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SprintTemplateService {
  private apiUrl = 'http://localhost:3000/api/v1/sprintTemplate';
  private id_token;
  constructor(private http: HttpClient, private auth: AuthService) {}

  get(): Observable<any> {
    console.log(this.auth.userId());
    // recevoir les sprint de l'utilisateur current
    return this.http.get<any>(`${this.apiUrl}/get`, {
      headers: new HttpHeaders().set(
        'Authorization',
        `Bearer ${localStorage.getItem('access_token')}`
      )
    });
  }

  deleteAll() {
    return this.http.delete(`${this.apiUrl}/delete/${this.auth.userId()}`);
  }
}
