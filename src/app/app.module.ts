import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule } from './app.routing';
import { HeaderComponent } from './shared/header/header.component';
import { AuthComponent } from './auth/auth.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    WelcomeComponent
  ],
  imports: [BrowserModule, RoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
