import { TestBed } from '@angular/core/testing';

import { GetMemberService } from './get-member.service';

describe('GetMemberService', () => {
  let service: GetMemberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMemberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
