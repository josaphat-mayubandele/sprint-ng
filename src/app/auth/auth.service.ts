import { Injectable } from '@angular/core';
import { AUTH_CONFIG } from './auth0-variables';
import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';
import { BehaviorSubject, Subject } from 'rxjs';

(window as any).global = window;

@Injectable()
export class AuthService {
  id_token: any;
  private loggedIn = new BehaviorSubject<boolean>(false); // {1}
  /*  auth0 = new auth0.WebAuth({
    clientID: AUTH_CONFIG.clientID,
    domain: AUTH_CONFIG.domain,
    responseType: "token id_token",
    audience: `https://${AUTH_CONFIG.domain}/userinfo`,
    redirectUri: AUTH_CONFIG.callbackURL,
    scope: "openid email profile"
  });
*/
  auth0 = new auth0.WebAuth({
    clientID: 'QWgVl28tvgr2rKGdCa3KVa3XZ7MWMzSR',
    domain: 'sprints.auth0.com',
    responseType: 'token id_token',
    audience: 'https://sprints.auth0.com/api/v2/',
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid profile'
  });
  constructor(public router: Router) {}

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        this.loggedIn.next(true);
        this.router.navigate(['/sprints']);
      } else if (err) {
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
        this.router.navigate(['/bug']);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    localStorage.setItem(
      'current_user',
      JSON.stringify(authResult.idTokenPayload)
    );
    this.setUsername();
    this.set_email();
  }

  public logout() {
    this.loggedIn.next(false);
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('user_email');
    localStorage.removeItem('current_user');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access all token's
    const access_token = localStorage.getItem('access_token');
    const id_token = localStorage.getItem('access_token');
    const expires_at = localStorage.getItem('id_token');
    const user_email = localStorage.getItem('user_email');
    const current_user = localStorage.getItem('current_user');
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
    // authentifier si tout access tokens existe
    if (
      access_token &&
      id_token &&
      expires_at &&
      user_email &&
      current_user &&
      new Date().getTime() < expiresAt
    ) {
      return true;
    }
    return false;
  }

  public set_email(): void {
    // verifie l'existance de access token
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Access Token must exist to fetch profile');
    }
    // recuperer les profiles du courant utilisateur
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        // localStorage.setItem('user_email', profile.email);
      }
    });
  }

  public setUsername(): void {
    const currentUser = JSON.parse(localStorage.current_user);
    localStorage.setItem('user_email', currentUser.nickname);
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }
  public userId() {
    const currentUser = JSON.parse(localStorage.current_user);
    return currentUser.sub;
  }
}
