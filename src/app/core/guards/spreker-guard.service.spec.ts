import {TestBed} from '@angular/core/testing';

import {SprekerGuardService} from './spreker-guard.service';

describe('SprekerGuardService', () => {
  let service: SprekerGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SprekerGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
