import { TestBed } from '@angular/core/testing';

import { Sessionlogin } from './sessionlogin';

describe('Sessionlogin', () => {
  let service: Sessionlogin;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sessionlogin);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
