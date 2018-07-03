import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { AuthService } from '../auth/auth.service';
import { PastSprintModel } from '../models/past-sprint.model';

@Injectable({
  providedIn: 'root'
})
export class PastSprintsService {
  profile: any;
  private apiUrl = 'http://localhost:3000/api/getsprint';
  constructor(private http: HttpClient, private auth: AuthService) {}

  getSprint(): Observable<PastSprintModel> {
    // recevoir les sprint de l'utilisateur current
    return this.http.get<PastSprintModel>(
      `${this.apiUrl}:${this.auth.id_token}`
    );
  }
}
