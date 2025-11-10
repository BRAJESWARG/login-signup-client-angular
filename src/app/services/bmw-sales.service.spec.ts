import { TestBed } from '@angular/core/testing';

import { BmwSalesService } from './bmw-sales.service';

describe('BmwSalesService', () => {
  let service: BmwSalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BmwSalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
