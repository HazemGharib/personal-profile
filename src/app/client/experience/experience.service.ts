import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ExperienceService {

  constructor(
    private http: HttpClient
  ) { }

  getExperience() {
    return this.http.get(`${environment.baseUri}/api/portfolio/experience`).pipe(map((res: any) => res));
  }
}
