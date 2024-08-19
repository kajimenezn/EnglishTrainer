import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnseriesComponent } from './learnseries.component';

describe('LearnseriesComponent', () => {
  let component: LearnseriesComponent;
  let fixture: ComponentFixture<LearnseriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LearnseriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearnseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
