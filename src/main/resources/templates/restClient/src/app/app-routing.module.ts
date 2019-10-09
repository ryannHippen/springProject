import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfilesComponent } from './profiles/profiles.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { AddProfileComponent } from './add-profile/add-profile.component';

import { EvaluationComponent } from './evaluation/evaluation.component';


const routes: Routes = [
  { path: 'profiles', component: ProfilesComponent },
  { path: 'profile/:id', component: ProfileDetailComponent },
  { path: 'profile/new', component: ProfileDetailComponent },
  { path: 'evaluation', component: EvaluationComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
