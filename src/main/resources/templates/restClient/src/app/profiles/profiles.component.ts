import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/profile';
import { ProfileService } from '../profile.service';
import { PassIdService } from '../pass-id.service';


@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  profiles: Profile[];
  id: string;

  

  constructor(private profileService: ProfileService,
              private data: PassIdService) { }

  ngOnInit() {
    this.getProfiles();
    this.data.currentId.subscribe(id => this.id = id);
  }

  getProfiles(): void {
    this.profileService.getProfiles()
    .subscribe(heroes => this.profiles = heroes);
  }

  delete(profile: Profile): void {
    this.profiles = this.profiles.filter(p => p !== profile);
    this.profileService.deleteProfile(profile).subscribe();
  }

  passId(){
    this.data.changeId()
  }

}
