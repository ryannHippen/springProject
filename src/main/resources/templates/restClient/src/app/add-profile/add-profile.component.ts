import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProfileService }  from '../profile.service';
import { Profile } from '../models/profile';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.css']
})
export class AddProfileComponent implements OnInit {

  @Input() profile: Profile = new Profile();
  
  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private location: Location
  ) {}

  ngOnInit(): void { }

  goBack(): void {
    this.location.back();
  }

  addProfile(): void {
    this.profileService.addProfile(this.profile)
        .subscribe( data => {
          alert("User created successfully.");
        });
  }

}
