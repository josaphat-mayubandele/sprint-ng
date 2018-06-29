import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { CallbackComponent } from './callback/callback.component';

import { AuthGuard } from './auth/auth.guard';
import { PastSprintsComponent } from './past-sprints/past-sprints.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  {
    path: 'sprints',
    component: PastSprintsComponent,
    canActivate: [AuthGuard]
  },
  { path: 'callback', component: CallbackComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
