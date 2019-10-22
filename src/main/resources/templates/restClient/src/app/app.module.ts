import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';

//angular materials
import { MatSliderModule } from '@angular/material/slider';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';   


import { AppComponent } from './app.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { AddProfileComponent } from './add-profile/add-profile.component';
// import { EvaluationComponent } from './evaluation/evaluation.component';
import { EvaluationsComponent } from './evaluations/evaluations.component';
import { AddEvaluationComponent } from './add-evaluation/add-evaluation.component';
import { EvaluationDetailComponent } from './evaluation-detail/evaluation-detail.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ProfileSearchComponent } from './profile-search/profile-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilesComponent,
    ProfileDetailComponent,
    AddProfileComponent,
    
    EvaluationsComponent,
    AddEvaluationComponent,
    EvaluationDetailComponent,
    FileUploadComponent,
    ProfileSearchComponent,
    LogInComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //angular materials
    MatSliderModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    // AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
