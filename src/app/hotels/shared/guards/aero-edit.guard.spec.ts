import { TestBed } from '@angular/core/testing';

import { HotelEditGuard } from './aero-edit.guard';

describe('HotelEditGuard', () => {
  let guard: HotelEditGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HotelEditGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
