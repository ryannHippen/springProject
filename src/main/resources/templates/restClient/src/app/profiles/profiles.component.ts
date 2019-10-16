import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile';
import { Evaluation } from '../models/evaluation';
import { ProfileService } from '../profile.service';
import { EvaluationService } from '../evaluation.service';
import { PassIdService } from '../pass-id.service';


@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  profiles: Profile[];
  evaluations: Evaluation[];
  id: number;
  buttonHasEval: boolean;

  
  constructor(
    private profileService: ProfileService,
    private evaluationService: EvaluationService,
    private data: PassIdService
  ) { 
    this.buttonHasEval = false;
  }

  ngOnInit() {
    this.getProfiles();
    this.getEvaluations();
    //this.findEvaluations(this.profiles, this.evaluations);
    this.data.currentId.subscribe(id => this.id = id);
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
  }

  onSelect(selectedItem: any) {
    console.log(selectedItem.Id); // You get the Id of the selected item here
  }


  setIfHasEvaluation(profile: Profile, evals: Evaluation[]) {
    console.log(profile.hasEval);
    if(evals && !profile.hasEval){
      evals.forEach(e => {
        if (e.profileProfileId == profile.profileId) {
          profile.hasEval = true;
        }
      });
    }
  }

  checkIfHasEvaluation(profile: Profile, evals: Evaluation[]) {
    console.log(profile.hasEval);
    if(evals && !profile.hasEval){
      evals.forEach(e => {
        if (e.profileProfileId == profile.profileId) {
          profile.hasEval = true;
          return profile.hasEval;
        }
      });
    }
    return profile.hasEval;
  }

  findEvaluations(profiles: Profile[], evals: Evaluation[]) {
    profiles.forEach(p => {
      let pId = p.profileId;
      evals.forEach(e => {
        let ePId = e.profileProfileId;
        if(pId == ePId){
          p.hasEval = true;
        }
      });
    });
  }

  changeButton(profile: Profile, evals: Evaluation[]){
    let hasEval = false;
    let pId = profile.profileId;
    evals.forEach(e => {
      let ePId = e.profileProfileId;
      if(pId == ePId){
        hasEval = true;
      }
    });

    //do stuff to button

  }



}
