import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile';
import { Evaluation } from '../models/evaluation';
import { ProfileService } from '../profile.service';
import { EvaluationService } from '../evaluation.service';
import { PassIdService } from '../pass-id.service';
import { PassEmailService } from '../pass-email.service';


@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  profiles: Profile[];
  evaluations: Evaluation[];
  id: number;
  email: string;
  buttonHasEval: boolean;


  constructor(
    private profileService: ProfileService,
    private evaluationService: EvaluationService,
    private data: PassIdService,
    private passEmailService: PassEmailService
  ) {
    this.buttonHasEval = false;
  }

  ngOnInit() {
    this.getProfiles();
    this.getEvaluations();
    // this.findEvaluations(this.profiles, this.evaluations);
    this.data.currentId.subscribe(id => this.id = id);
    this.passEmailService.currentEmail.subscribe(email => this.email = email);
  }

  getProfiles(): void {
    this.profileService.getProfiles()
    .subscribe(profiles => this.profiles = profiles);
  }

  getEvaluations(): void {
    this.evaluationService.getEvaluations()
    .subscribe(evaluation => this.evaluations = evaluation);
  }

  delete(profile: Profile): void {
    this.profiles = this.profiles.filter(p => p !== profile);
    this.profileService.deleteProfile(profile).subscribe();
  }

  passId(selectedItem: any) {
    this.data.changeId(selectedItem.profileId);
    this.passEmailService.changeEmail(selectedItem.email);
  }

  passEmail(selectedItem: any) {
    this.passEmailService.changeEmail(selectedItem.email);
  }

  onSelect(selectedItem: any) {
    console.log(selectedItem.Id); // You get the Id of the selected item here
  }

  checkIfHasEvaluation(profile: Profile, evals: Evaluation[]) {
    if (evals && !profile.hasEval) {
      evals.forEach(e => {
        if (e.profileProfileId === profile.profileId) {
          profile.hasEval = true;
          return profile.hasEval;
        }
      });
    }
    return profile.hasEval;
  }



}
