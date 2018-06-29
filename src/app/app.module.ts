import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { RoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component';
import { PastSprintsComponent } from './past-sprints/past-sprints.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    CallbackComponent,
    PastSprintsComponent
  ],
  imports: [BrowserModule, FormsModule, HttpModule, RoutingModule],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
