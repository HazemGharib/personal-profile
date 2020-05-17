import { TestBed, inject } from '@angular/core/testing';

import { ExperienceService } from './experience.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ExperienceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExperienceService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([ExperienceService], (service: ExperienceService) => {
    expect(service).toBeTruthy();
  }));
});
