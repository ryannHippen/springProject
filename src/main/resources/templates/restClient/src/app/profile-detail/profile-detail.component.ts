import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProfileService }  from '../profile.service';
import { Profile } from '../models/profile';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {

  @Input() profile: Profile;
  
  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private location: Location
  ) {}

  ngOnInit(): void { }

  goBack(): void {
    this.location.back();
  }

}
