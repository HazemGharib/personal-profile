import { TestBed, inject } from '@angular/core/testing';

import { SkillsService } from './skills.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SkillsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SkillsService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([SkillsService], (service: SkillsService) => {
    expect(service).toBeTruthy();
  }));
});
