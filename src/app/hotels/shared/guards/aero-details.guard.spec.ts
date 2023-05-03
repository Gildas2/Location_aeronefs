import { TestBed } from '@angular/core/testing';

import { HotelDetailsGuard } from './aero-details.guard';

describe('HotelDetailsGuard', () => {
  let guard: HotelDetailsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HotelDetailsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
