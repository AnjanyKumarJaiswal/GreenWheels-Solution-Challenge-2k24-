import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmissionMapComponent } from './emission-map.component';

describe('EmissionMapComponent', () => {
  let component: EmissionMapComponent;
  let fixture: ComponentFixture<EmissionMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmissionMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmissionMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
