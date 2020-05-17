import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AdministrationService {

  constructor(
    private http: HttpClient
    ) { }

    setProfile(id, profile) {
      return this.http.put(`${environment.baseUri}/api/portfolio/administration/profile/${id}`, profile)
      .pipe(map((res: any) => res));
    }

    setContact(id, contact) {
      return this.http.put(`${environment.baseUri}/api/portfolio/administration/contact/${id}`, contact)
      .pipe(map((res: any) => res));
    }

    setExperience(id, experience) {
      return this.http.put(`${environment.baseUri}/api/portfolio/administration/experience/${id}`, experience)
      .pipe(map((res: any) => res));
    }

    setSkills(id, skills) {
      return this.http.put(`${environment.baseUri}/api/portfolio/administration/skills/${id}`, skills)
      .pipe(map((res: any) => res));
    }
}
