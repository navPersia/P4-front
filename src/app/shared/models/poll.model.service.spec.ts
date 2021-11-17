import {TestBed} from '@angular/core/testing';

import {Poll} from './poll.model.service';

describe('Poll.ModelService', () => {
  let service: Poll;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Poll);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
