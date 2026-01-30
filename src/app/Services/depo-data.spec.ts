import { TestBed } from '@angular/core/testing';

import { DepoData } from './depo-data';

describe('DepoData', () => {
  let service: DepoData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepoData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
