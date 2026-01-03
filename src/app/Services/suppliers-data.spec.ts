import { TestBed } from '@angular/core/testing';

import { SuppliersData } from './suppliers-data';

describe('SuppliersData', () => {
  let service: SuppliersData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuppliersData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
