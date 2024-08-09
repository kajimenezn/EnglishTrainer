import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L3pastcontinuousComponent } from './l3pastcontinuous.component';

describe('L3pastcontinuousComponent', () => {
  let component: L3pastcontinuousComponent;
  let fixture: ComponentFixture<L3pastcontinuousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [L3pastcontinuousComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(L3pastcontinuousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
