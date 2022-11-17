import { TestBed } from '@angular/core/testing';

import { VisitorsRegistrationService } from './visitors-registration.service';

describe('VisitorsRegistrationService', () => {
  let service: VisitorsRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitorsRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
