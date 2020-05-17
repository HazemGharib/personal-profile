import { TestBed, inject } from '@angular/core/testing';

import { AdministrationService } from './administration.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AdministrationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdministrationService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([AdministrationService], (service: AdministrationService) => {
    expect(service).toBeTruthy();
  }));
});
