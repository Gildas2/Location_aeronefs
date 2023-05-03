import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeroEditComponent } from './aero-edit.component';

describe('HotelEditComponent', () => {
  let component: AeroEditComponent;
  let fixture: ComponentFixture<AeroEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeroEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeroEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
