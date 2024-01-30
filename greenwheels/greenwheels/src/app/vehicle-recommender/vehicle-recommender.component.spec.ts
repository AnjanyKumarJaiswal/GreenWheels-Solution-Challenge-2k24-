import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleRecommenderComponent } from './vehicle-recommender.component';

describe('VehicleRecommenderComponent', () => {
  let component: VehicleRecommenderComponent;
  let fixture: ComponentFixture<VehicleRecommenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleRecommenderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VehicleRecommenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
