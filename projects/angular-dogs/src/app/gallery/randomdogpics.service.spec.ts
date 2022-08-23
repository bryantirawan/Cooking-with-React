import { TestBed } from '@angular/core/testing';

import { RandomdogpicsService } from './randomdogpics.service';

describe('RandomdogpicsService', () => {
  let service: RandomdogpicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomdogpicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
