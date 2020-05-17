import { TestBed, inject } from '@angular/core/testing';

import { ProfileService } from './profile.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([ProfileService], (service: ProfileService) => {
    expect(service).toBeTruthy();
  }));
});
