import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hubs } from './hubs';

describe('Hubs', () => {
  let component: Hubs;
  let fixture: ComponentFixture<Hubs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hubs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hubs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
