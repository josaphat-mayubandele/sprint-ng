import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // activation de route apres authentification
    return this.auth.isLoggedIn.pipe(
      take(1),
      map((isLoggedIn: boolean) => {
        // verifie le configuration d'authentification
        // verifie s'il est authentifier
        if (!isLoggedIn && !this.auth.isAuthenticated()) {
          this.auth.login();
          return false;
        }
        return true;
      })
    );
  }
}
