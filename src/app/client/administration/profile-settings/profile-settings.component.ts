import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Profile } from './../../profile/profile';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent implements OnInit {

  @Output()
  change: EventEmitter<Profile> = new EventEmitter<Profile>();

  countriesList: any[] = [
    {'id':  1, 'name': 'Egypt'},
    {'id':  2, 'name': 'Malaysia'},
    {'id':  3, 'name': 'England'},
    {'id':  4, 'name': 'Netherlands'},
    {'id':  5, 'name': 'Germany'},
    {'id':  6, 'name': 'Switzerland'},
    {'id':  7, 'name': 'Canada'},
    {'id':  8, 'name': 'United States'},
    {'id':  9, 'name': 'Singapore'},
    {'id': 10, 'name': 'Australia'},
    {'id': 11, 'name': 'United Arab Emirates'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
