import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlighResultComponent } from './fligh-result.component';

describe('FlighResultComponent', () => {
  let component: FlighResultComponent;
  let fixture: ComponentFixture<FlighResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlighResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlighResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
