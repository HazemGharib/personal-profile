import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import { OktaAuthService } from '@okta/okta-angular';

import { Profile } from '../profile/profile';
import { Contact } from '../contact/contact';
import { Experience } from '../experience/experience';
import { Skills } from '../skills/skills';
import { AdministrationService } from './administration.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

  profile: Profile;
  contact: Contact;
  experience: Experience;
  skills: Skills;

  updatesSummary: any[];

  constructor(
    private _formBuilder: FormBuilder,
    private oktaAuth: OktaAuthService,
    private administrationService: AdministrationService
  ) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  onProfileChange(data) {
    this.profile = data;
  }

  onContactChange(data) {
    this.contact = data;
  }

  onExperienceChange(data) {
    this.experience = data;
  }

  onSkillsChange(data) {
    this.skills = data;
  }

  saveChanges() {
    console.log('Data Saved');
    if (typeof(this.profile) !== 'undefined') {
      this.administrationService.setProfile(this.profile._id, this.profile).subscribe((result) => {
        // TODO: Toaster message
        alert('Profile updated !!');
      });
    }
    if (typeof(this.contact) !== 'undefined') {
      this.administrationService.setContact(this.contact._id, this.contact).subscribe((result) => {
        // TODO: Toaster message
        alert('Contact updated !!');
      });
    }
    if (typeof(this.experience) !== 'undefined') {
      this.administrationService.setExperience(this.experience._id, this.experience).subscribe((result) => {
        // TODO: Toaster message
        alert('Experience updated !!');
      });
    }
    if (typeof(this.skills) !== 'undefined') {
      this.administrationService.setSkills(this.skills._id, this.skills).subscribe((result) => {
        // TODO: Toaster message
        alert('Skills updated !!');
      });
    }
  }

  getUpdatesSummary($event) {
    if ($event.selectedIndex === 4) {
      this.updatesSummary = [];

      if (typeof(this.profile) !== 'undefined') { this.updatesSummary.push(this.profile); }
      if (typeof(this.contact) !== 'undefined') { this.updatesSummary.push(this.contact); }
      if (typeof(this.experience) !== 'undefined') { this.updatesSummary.push(this.experience); }
      if (typeof(this.skills) !== 'undefined') { this.updatesSummary.push(this.skills); }

      console.log(this.updatesSummary);
    }
  }
}
