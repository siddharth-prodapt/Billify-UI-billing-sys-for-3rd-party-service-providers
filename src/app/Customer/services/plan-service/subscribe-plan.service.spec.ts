import { TestBed } from '@angular/core/testing';

import { SubscribePlanService } from './subscribe-plan.service';

describe('SubscribePlanService', () => {
  let service: SubscribePlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubscribePlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
