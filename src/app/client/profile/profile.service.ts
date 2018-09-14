import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable()
export class ProfileService {

  constructor(
    private http: Http
  ) { }

  getProfile() {
    return this.http.get(`${environment.apiBaseUri}/api/portfolio/profile`).pipe(map((res: Response) => res.json()));
  }
}
