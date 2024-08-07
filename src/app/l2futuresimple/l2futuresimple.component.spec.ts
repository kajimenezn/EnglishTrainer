import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L2futuresimpleComponent } from './l2futuresimple.component';

describe('L2futuresimpleComponent', () => {
  let component: L2futuresimpleComponent;
  let fixture: ComponentFixture<L2futuresimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [L2futuresimpleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(L2futuresimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
