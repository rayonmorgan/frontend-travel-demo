import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseFlightComponent } from './purchase-flight.component';

describe('PurchaseFlightComponent', () => {
  let component: PurchaseFlightComponent;
  let fixture: ComponentFixture<PurchaseFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseFlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
