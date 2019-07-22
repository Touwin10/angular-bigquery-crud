import { TestBed } from '@angular/core/testing';

import { BigqueryService } from './bigquery.service';

describe('BigqueryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BigqueryService = TestBed.get(BigqueryService);
    expect(service).toBeTruthy();
  });
});
