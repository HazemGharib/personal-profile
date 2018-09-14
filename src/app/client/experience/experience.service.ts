import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable()
export class ExperienceService {

  constructor(
    private http: Http
  ) { }

  getExperience() {
    return this.http.get(`${environment.apiBaseUri}/api/portfolio/experience`).pipe(map((res: Response) => res.json()));
  }
}
