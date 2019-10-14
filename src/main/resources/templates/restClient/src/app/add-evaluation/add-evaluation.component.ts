import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location, PathLocationStrategy } from '@angular/common';

import { ProfileService } from '../profile.service';
import { EvaluationService } from '../evaluation.service';
import { Evaluation } from '../models/evaluation';
import { Profile } from '../models/profile';
import { PassIdService } from '../pass-id.service';


@Component({
  selector: 'app-add-evaluation',
  templateUrl: './add-evaluation.component.html',
  styleUrls: ['./add-evaluation.component.css']
})
export class AddEvaluationComponent implements OnInit {

  @Input() evaluation: Evaluation = new Evaluation();
  profile: Profile;
  
  id: number;

  constructor(
    private route: ActivatedRoute,
    private evaluationService: EvaluationService,
    private location: Location,
    private data: PassIdService,
    private profileService: ProfileService
  ) { }



  ngOnInit(): void {
    this.data.currentId.subscribe(id => this.id = id);
    this.evaluation.evaluationId = this.id;
    this.evaluation.profileProfileId = this.id;
  }

  goBack(): void {
    this.location.back();
  }

  addEvaluation(): void {
    this.getProfile();
    this.saveProfile();
    this.evaluationService.addEvaluation(this.evaluation)
        .subscribe( data => {
          alert("Evaluation created successfully.");
          this.goBack();
        });
  }

  getProfile(): void {
    this.profileService.getProfile(this.id)
      .subscribe(profile => this.profile = profile);
  }

  saveProfile(): void {
    this.profile.evaluationEvaluationId = this.id;
    this.profileService.updateProfile(this.profile)
      .subscribe();
  }

}
