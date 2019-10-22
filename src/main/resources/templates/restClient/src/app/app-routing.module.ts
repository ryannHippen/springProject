import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfilesComponent } from './profiles/profiles.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { AddProfileComponent } from './add-profile/add-profile.component';
//login/register
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';

import { EvaluationsComponent } from './evaluations/evaluations.component';
import { AddEvaluationComponent } from './add-evaluation/add-evaluation.component';
import { EvaluationDetailComponent } from './evaluation-detail/evaluation-detail.component';
import { UploadComponent } from './upload/upload.component';


const routes: Routes = [
  { path: 'profiles', component: ProfilesComponent },
  //login/register
  { path: 'log-in' , component: LogInComponent},
  { path: 'register' , component: RegisterComponent},
  { path: 'profile/new', component: AddProfileComponent },
  { path: 'profile/:id', component: ProfileDetailComponent },
  { path: 'evaluations', component: EvaluationsComponent },
  { path: 'evaluation/new', component: AddEvaluationComponent },
  { path: 'evaluation/:id', component: EvaluationDetailComponent },
  { path: 'upload', component: UploadComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
