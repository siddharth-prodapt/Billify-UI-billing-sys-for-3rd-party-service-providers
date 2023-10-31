import { TestBed } from '@angular/core/testing';

import { ToogleAccessService } from './toogle-access.service';

describe('ToogleAccessService', () => {
  let service: ToogleAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToogleAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
