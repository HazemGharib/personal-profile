import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  constructor(private oktaAuth: OktaAuthService) { }

  async ngOnInit() {
    const accessToken = await this.oktaAuth.getAccessToken();
    const headers = new Headers({
      Authorization: 'Bearer ' + accessToken
    });
  }

}
