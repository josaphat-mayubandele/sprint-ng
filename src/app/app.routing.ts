import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { CallbackComponent } from './callback/callback.component';

import { AuthGuard } from './auth/auth.guard';
import { PastSprintsComponent } from './past-sprints/past-sprints.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewSprintComponent } from './new-sprint/new-sprint.component';
import { OngoingSprintComponent } from './new-sprint/ongoing-sprint/ongoing-sprint.component';
const routes: Routes = [
  { path: '', component: WelcomeComponent },
  {
    path: 'sprints',
    component: PastSprintsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'new',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: NewSprintComponent
      },
      {
        path: 'on',
        component: OngoingSprintComponent
      }
    ]
  },
  { path: 'callback', component: CallbackComponent },
  { path: '**', component: PageNotFoundComponent },
  { path: 'notfound', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
