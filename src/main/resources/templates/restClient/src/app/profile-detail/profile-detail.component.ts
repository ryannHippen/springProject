import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {MatSnackBar} from '@angular/material/snack-bar';

import { ProfileService }  from '../profile.service';
import { EvaluationService }  from '../evaluation.service';
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
  evaluation: Evaluation;
  
  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private location: Location,
    private evaluationService: EvaluationService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getProfile();
  }

  receiveFileId($event) {
    this.profile.fileFileId = $event;
    this.save();
  }

  getProfile(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.profileService.getProfile(id)
      .subscribe(profile => this.profile = profile);
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
      .subscribe(() => this.goBack());
  }

  undo(): void {
    this.getProfile();
    alert("Changes were undone.")
  }

}
