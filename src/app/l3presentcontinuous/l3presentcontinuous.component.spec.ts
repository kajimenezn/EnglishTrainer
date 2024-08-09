import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L3presentcontinuousComponent } from './l3presentcontinuous.component';

describe('L3presentcontinuousComponent', () => {
  let component: L3presentcontinuousComponent;
  let fixture: ComponentFixture<L3presentcontinuousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [L3presentcontinuousComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(L3presentcontinuousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
