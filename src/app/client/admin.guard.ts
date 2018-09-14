import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  isAuthenticated: boolean;

  constructor(private oktaAuth: OktaAuthService, private router: Router) {
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
  }

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      this.isAuthenticated = await this.oktaAuth.isAuthenticated();
      if (!this.isAuthenticated) {
        this.router.navigate(['/PageNotFound']);
      }
      return this.isAuthenticated;
    }
}
