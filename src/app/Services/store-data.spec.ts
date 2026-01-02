import { TestBed } from '@angular/core/testing';

import { StoreData } from './store-data';

describe('StoreData', () => {
  let service: StoreData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
