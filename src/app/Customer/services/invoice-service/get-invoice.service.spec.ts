import { TestBed } from '@angular/core/testing';

import { GetInvoiceService } from './get-invoice.service';

describe('GetInvoiceService', () => {
  let service: GetInvoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetInvoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
