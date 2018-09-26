import { ProfileService } from './../../profile/profile.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Profile } from './../../profile/profile';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent implements OnInit {

  @Output()
  valueChange: EventEmitter<Profile> = new EventEmitter<Profile>();

  countriesList: any[] = [
    {'id':  1, 'name': 'Egypt', 'nationality': 'Egyptian'},
    {'id':  2, 'name': 'Malaysia', 'nationality': 'Malaysian'},
    {'id':  3, 'name': 'England', 'nationality': 'English'},
    {'id':  4, 'name': 'Netherlands', 'nationality': 'Dutch'},
    {'id':  5, 'name': 'Germany', 'nationality': 'German'},
    {'id':  6, 'name': 'Switzerland', 'nationality': 'Swiss'},
    {'id':  7, 'name': 'Canada', 'nationality': 'Canadian'},
    {'id':  8, 'name': 'United States', 'nationality': 'American'},
    {'id':  9, 'name': 'Singapore', 'nationality': 'Singaporian'},
    {'id': 10, 'name': 'Australia', 'nationality': 'Australian'},
    {'id': 11, 'name': 'United Arab Emirates', 'nationality': 'Emirati'},
  ];
  sectionName: string;
  profile: Profile;
  dataReady: boolean;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getProfile().subscribe((profile) => {
      this.profile = profile;
      this.dataReady = true;
    });
  }

  addSection() {
    if (this.sectionName.length > 0) {
      this.profile.profileSections.push({ sectionName: this.sectionName, sectionContent: '' });
      this.sectionName = '';
      this.valueChange.emit(this.profile);
    }
  }

  removeSection(section) {
    if (section) {
        this.profile.profileSections.splice(this.profile.profileSections.indexOf(section), 1);
        this.valueChange.emit(this.profile);
    }
  }

}
