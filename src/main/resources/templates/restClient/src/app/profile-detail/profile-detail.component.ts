import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {MatSnackBar} from '@angular/material/snack-bar';

import { ProfileService } from '../profile.service';
import { EvaluationService } from '../evaluation.service';
import { FileuploadService } from '../fileupload.service';
import { Profile } from '../models/profile';
import { Evaluation } from '../models/evaluation';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {

  @Input() profile: Profile;
  @Input() form: FormData;
  evaluation: Evaluation;
  fileId: any = null;

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private location: Location,
    private evaluationService: EvaluationService,
    private snackBar: MatSnackBar,
    private fileService: FileuploadService
  ) {}

  ngOnInit(): void {
    this.getProfile();
  }

  receiveFileId($event) {
    this.profile.fileFileId = $event;
    this.save();
  }

  receiveFileFormData($event) {
    console.log('in receiveFileFormData');
    this.form = $event;
    this.updateFile(this.form);
  }

  updateFile(form: FormData) {
    form.append('id', this.fileId);

    this.fileService.updateFile(form)
    .subscribe(data => {
          console.log(data);
          alert('File uploaded successfully.');
        });
  }

  getProfile(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.profileService.getProfile(id)
      .subscribe(profile => {
        this.profile = profile;
        this.fileId = this.profile.fileFileId;
      });
  }

  getEvaluation(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.evaluationService.getEvaluation(id)
      .subscribe(evaluation => this.evaluation = evaluation);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.profileService.updateProfile(this.profile)
      .subscribe();
    alert('Changes have been saved.');
  }

  undo(): void {
    this.getProfile();
    alert('Changes were undone.');
  }

}
