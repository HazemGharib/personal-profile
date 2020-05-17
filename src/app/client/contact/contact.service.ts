import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContactService {

  constructor(
    private http: HttpClient
  ) { }

  getContact() {
    return this.http.get(`${environment.baseUri}/api/portfolio/contact`).pipe(map((res: any) => res));
  }
}
