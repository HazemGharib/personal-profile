import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SkillsService {

  constructor(
    private http: HttpClient
  ) { }

  getSkills() {
    return this.http.get(`${environment.baseUri}/api/portfolio/skills`).pipe(map((res: any) => res));
  }
}
