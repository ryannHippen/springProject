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
  
  constructor(
    private profileService: ProfileService,
    private evaluationService: EvaluationService,
    private data: PassIdService
  ) { }

  ngOnInit() {
    this.getProfiles();
    this.getEvaluations();
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


  hasEvaluation(profileId: number, evals: Evaluation[]) {
    if(evals){
      evals.forEach(e => {
        if (e.profileProfileId == profileId) {
          console.log("TRUE");
          return true;
        }
      });
    }
    console.log("FALSE");
    return false;
  }

}
