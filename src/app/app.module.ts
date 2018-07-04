import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { RoutingModule } from './app.routing';
import { PastSprintsModule } from './past-sprints/past-sprints.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewSprintModule } from './new-sprint/new-sprint.module';
import { OngoingSprintModule } from './ongoing-sprint/ongoing-sprint.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    CallbackComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    NewSprintModule,
    OngoingSprintModule,
    PastSprintsModule,
    RoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
