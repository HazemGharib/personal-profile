import { Component, OnInit, EventEmitter } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  isAuthenticated: boolean;

  constructor(public oktaAuth: OktaAuthService) {
    // Subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
  }

  ngOnInit() {
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
    this.oktaAuth.loginRedirect('/profile');
  }

  logout() {
    this.oktaAuth.logout('/');
  }
}
