import { TestBed, async, inject } from '@angular/core/testing';

import { AdminGuard } from './admin.guard';
import { OktaAuthService } from '@okta/okta-angular';

describe('AdminGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminGuard, OktaAuthService],
    });
  });

  // it('should ...', inject([AdminGuard, OktaAuthService], (guard: AdminGuard) => {
  //   expect(guard).toBeTruthy();
  // }));
});
