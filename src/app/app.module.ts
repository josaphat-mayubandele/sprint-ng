import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RoutingModule } from './app.routing';
import { PastSprintsModule } from './past-sprints/past-sprints.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewSprintModule } from './new-sprint/module/new-sprint.module';
import { FooterComponent } from './shared/footer/footer.component';
import { GaugeModule } from 'angular-gauge';
import { PushNotificationsService } from './services/push.notification.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    CallbackComponent,
    PageNotFoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    GaugeModule.forRoot(),
    HttpClientModule,
    NewSprintModule,
    PastSprintsModule,
    RoutingModule,
    NgbModule.forRoot()
  ],
  providers: [AuthService, PushNotificationsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
