import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { EvaluationsComponent } from './evaluations/evaluations.component';
import { AddEvaluationComponent } from './add-evaluation/add-evaluation.component';
import { EvaluationDetailComponent } from './evaluation-detail/evaluation-detail.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ProfileSearchComponent } from './profile-search/profile-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    ProfileSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
