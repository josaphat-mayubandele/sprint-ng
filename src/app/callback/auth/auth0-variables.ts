interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'Wi2RM6IFlZzDmSzwtaP4bEZU1MyEML9g',
  domain: 'sprint-josaphat.auth0.com',
  callbackURL: 'http://localhost:3000/callback'
};
