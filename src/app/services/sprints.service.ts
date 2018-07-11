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
export class SprintsService {
  private apiUrl = 'http://localhost:3000/api/v1/sprint';
  current: any = {};

  constructor(private http: HttpClient, private auth: AuthService) {}
  // create ongoing on sprint service
  create(current) {
    this.current = current;
  }
  // envoie current sprint dans le back end
  // pour etre saver dans la base de donnees
  save(current: PastSprints): Observable<any> {
    current.user = this.auth.userId();
    console.log('save');
    return this.http.put<any>(
      `${this.apiUrl}/create/${this.auth.userId()}`,
      current,
      {
        headers: new HttpHeaders().set(
          'Authorization',
          `Bearer ${localStorage.getItem('access_token')}`
        )
      }
    );
  }
  // get past sprint for a user
  get(): Observable<any> {
    console.log(this.auth.userId());
    // recevoir les sprint de l'utilisateur current
    return this.http.get<any>(`${this.apiUrl}/get/${this.auth.userId()}`, {
      headers: new HttpHeaders().set(
        'Authorization',
        `Bearer ${localStorage.getItem('access_token')}`
      )
    });
  }
  // delete all sprint for a user
  deleteAll(): Observable<any> {
    return this.http.delete<any>(
      `${this.apiUrl}/delete/${this.auth.userId()}`,
      {
        headers: new HttpHeaders().set(
          'Authorization',
          `Bearer ${localStorage.getItem('access_token')}`
        )
      }
    );
  }
}
