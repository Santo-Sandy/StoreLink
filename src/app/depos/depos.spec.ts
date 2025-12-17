import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Depos } from './depos';

describe('Depos', () => {
  let component: Depos;
  let fixture: ComponentFixture<Depos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Depos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Depos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
