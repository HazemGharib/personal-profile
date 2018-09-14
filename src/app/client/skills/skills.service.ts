import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable()
export class SkillsService {

  constructor(
    private http: Http
  ) { }

  getSkills() {
    return this.http.get(`${environment.apiBaseUri}/api/portfolio/skills`).pipe(map((res: Response) => res.json()));
  }
}
