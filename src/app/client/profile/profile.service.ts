import { Profile } from './profile';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProfileService {

  constructor(
    private http: HttpClient
  ) { }

  getProfile(): Observable<Profile> {
    return this.http.get(`${environment.baseUri}/api/portfolio/profile`).pipe(map((res: any) => res));
  }
}
