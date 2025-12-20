import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trackproduct } from './trackproduct';

describe('Trackproduct', () => {
  let component: Trackproduct;
  let fixture: ComponentFixture<Trackproduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Trackproduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Trackproduct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
