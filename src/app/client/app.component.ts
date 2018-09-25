import { ProfileService } from './profile/profile.service';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isAuthenticated: boolean;

  constructor(private titleService: Title, public oktaAuth: OktaAuthService, private profileService: ProfileService) {
    // Subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
  }

  ngOnInit() {
    this.profileService.getProfile().subscribe((result) => {
      localStorage.setItem('profileHeadName', result.profileHeadName);
      localStorage.setItem('profileCurrentTitle', result.profileCurrentTitle);
      localStorage.setItem('profileImage', result.profileImage);
      this.titleService.setTitle(result.profileHeadName);
    });

    // Get the authentication state for immediate use
    this.isLoggedIn();
  }

  isLoggedIn() {
    this.oktaAuth.isAuthenticated().then((result) => {
      this.isAuthenticated = result;
    });
    return this.isAuthenticated;
  }

  login() {
    this.oktaAuth.loginRedirect('/administration');
  }

  logout() {
    this.oktaAuth.logout('/');
  }
}
