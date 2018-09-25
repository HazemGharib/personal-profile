import { Profile } from './profile';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class ProfileService {

  constructor(
    private http: Http
  ) { }

  getProfile(): Observable<Profile> {
    return this.http.get(`${environment.baseUri}/api/portfolio/profile`).pipe(map((res: Response) => res.json()));
  }
}
