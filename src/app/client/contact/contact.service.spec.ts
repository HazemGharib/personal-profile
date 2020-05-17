import { TestBed, inject } from '@angular/core/testing';

import { ContactService } from './contact.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ContactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([ContactService], (service: ContactService) => {
    expect(service).toBeTruthy();
  }));
});
