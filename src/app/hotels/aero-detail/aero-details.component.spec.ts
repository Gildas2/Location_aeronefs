import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeroDetailsComponent } from './aero-details.component';

describe('HotelDetailsComponent', () => {
  let component: AeroDetailsComponent;
  let fixture: ComponentFixture<AeroDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeroDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeroDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
