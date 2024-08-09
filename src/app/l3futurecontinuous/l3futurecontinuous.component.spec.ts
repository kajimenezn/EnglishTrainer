import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L3futurecontinuousComponent } from './l3futurecontinuous.component';

describe('L3futurecontinuousComponent', () => {
  let component: L3futurecontinuousComponent;
  let fixture: ComponentFixture<L3futurecontinuousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [L3futurecontinuousComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(L3futurecontinuousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
