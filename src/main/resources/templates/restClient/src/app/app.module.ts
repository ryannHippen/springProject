import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';


//angular material
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {FileUploadModule} from 'ng2-file-upload';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { EvaluationsComponent } from './evaluations/evaluations.component';
import { AddEvaluationComponent } from './add-evaluation/add-evaluation.component';
import { EvaluationDetailComponent } from './evaluation-detail/evaluation-detail.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';

import { ProfileSearchComponent } from './profile-search/profile-search.component';
import { UploadComponent } from './upload/upload.component';
import { UpdateFileComponent } from './update-file/update-file.component';



@NgModule({
  declarations: [
    AppComponent,
    ProfilesComponent,
    ProfileDetailComponent,
    AddProfileComponent,
    
    EvaluationsComponent,
    AddEvaluationComponent,
    EvaluationDetailComponent,
    LogInComponent,
    RegisterComponent,
    ProfileSearchComponent,
    UploadComponent,
    UpdateFileComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    
    //angular materials

    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    // AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
   

    HttpClientModule,
    AppRoutingModule,
    FileUploadModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
