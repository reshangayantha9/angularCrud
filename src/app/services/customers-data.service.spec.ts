import { TestBed } from '@angular/core/testing';

import { CustomersDataService } from './customers-data.service';

describe('CustomersDataService', () => {
  let service: CustomersDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomersDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
