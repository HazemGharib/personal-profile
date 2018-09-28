import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable()
export class AdministrationService {

  constructor(
    private http: Http
    ) { }

    setProfile(id, profile) {
      return this.http.put(`${environment.baseUri}/api/portfolio/administration/profile/${id}`, profile)
      .pipe(map((res: Response) => res.json()));
    }

    setContact(id, contact) {
      return this.http.put(`${environment.baseUri}/api/portfolio/administration/contact/${id}`, contact)
      .pipe(map((res: Response) => res.json()));
    }

    setExperience(id, experience) {
      return this.http.put(`${environment.baseUri}/api/portfolio/administration/experience/${id}`, experience)
      .pipe(map((res: Response) => res.json()));
    }

    setSkills(id, skills) {
      return this.http.put(`${environment.baseUri}/api/portfolio/administration/skills/${id}`, skills)
      .pipe(map((res: Response) => res.json()));
    }
}
