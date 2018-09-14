import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable()
export class ContactService {

  constructor(
    private http: Http
  ) { }

  getContact() {
    return this.http.get(`${environment.apiBaseUri}/api/portfolio/contact`).pipe(map((res: Response) => res.json()));
  }
}
