import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfilesComponent } from './profiles/profiles.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { AddProfileComponent } from './add-profile/add-profile.component';

import { EvaluationsComponent } from './evaluations/evaluations.component';
import { AddEvaluationComponent } from './add-evaluation/add-evaluation.component';
import { EvaluationDetailComponent } from './evaluation-detail/evaluation-detail.component';



const routes: Routes = [
  { path: 'profiles', component: ProfilesComponent },
  { path: 'profile/new', component: AddProfileComponent },
  { path: 'profile/:id', component: ProfileDetailComponent },
  { path: 'evaluations', component: EvaluationsComponent },
  { path: 'evaluation/new', component: AddEvaluationComponent },
  { path: 'evaluation/:id', component: EvaluationDetailComponent }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
