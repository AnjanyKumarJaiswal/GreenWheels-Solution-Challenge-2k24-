import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmissionRateComponent } from './emission-rate.component';

describe('EmissionRateComponent', () => {
  let component: EmissionRateComponent;
  let fixture: ComponentFixture<EmissionRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmissionRateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmissionRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
