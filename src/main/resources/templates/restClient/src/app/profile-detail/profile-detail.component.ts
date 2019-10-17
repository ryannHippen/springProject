import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProfileService }  from '../profile.service';
import { EvaluationService }  from '../evaluation.service';
import { Profile } from '../models/profile';
import { Evaluation } from '../models/evaluation';

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
    private evaluationService: EvaluationService
  ) {}

  ngOnInit(): void {
    this.getProfile();
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

}
