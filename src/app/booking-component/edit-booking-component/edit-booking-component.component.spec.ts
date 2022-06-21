import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBookingComponentComponent } from './edit-booking-component.component';

describe('EditBookingComponentComponent', () => {
  let component: EditBookingComponentComponent;
  let fixture: ComponentFixture<EditBookingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBookingComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBookingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
