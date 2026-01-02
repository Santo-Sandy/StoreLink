import { TestBed } from '@angular/core/testing';

import { RoutesData } from './routes-data';

describe('RoutesData', () => {
  let service: RoutesData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutesData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
