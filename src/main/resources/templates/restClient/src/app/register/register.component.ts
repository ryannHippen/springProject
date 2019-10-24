import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Register} from '../models/register';

import { RegisterService } from '../register.service';
import { ProfileService }  from '../profile.service';
import { Profile } from '../models/profile';

//custom validator
import { MustMatch } from './MustMatch';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
@Input() profile: Profile = new Profile();
@Input() register: Register = new Register();


  registerForm: FormGroup;
  submitted = false;



  loading = false;
  
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private profileService: ProfileService,
    private registerService: RegisterService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
  
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
    
  }

  //allows the formgroup controls to be easliy accessed
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    //move to the next view
    //this.addProfile();
    this.addRegistration();
}
      
addProfile(): void {
  this.profileService.addProfile(this.profile)
      .subscribe( data => {
        //alert("Profile created successfully.");
      });
}

addRegistration(): void {
  this.registerService.addRegistration(this.register).subscribe(data => {
    //alert("Profile created successfully.");
  });
}

}
