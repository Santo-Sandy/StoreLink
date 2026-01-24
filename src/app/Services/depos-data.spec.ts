import { TestBed } from '@angular/core/testing';

import { DeposData } from './depos-data';

describe('DeposData', () => {
  let service: DeposData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeposData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
