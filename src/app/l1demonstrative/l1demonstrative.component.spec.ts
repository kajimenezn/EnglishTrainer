import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L1demonstrativeComponent } from './l1demonstrative.component';

describe('L1demonstrativeComponent', () => {
  let component: L1demonstrativeComponent;
  let fixture: ComponentFixture<L1demonstrativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [L1demonstrativeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(L1demonstrativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
