import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { AddProfileComponent } from './add-profile/add-profile.component';
// import { EvaluationComponent } from './evaluation/evaluation.component';
import { EvaluationsComponent } from './evaluations/evaluations.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilesComponent,
    ProfileDetailComponent,
    AddProfileComponent,
    EvaluationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
