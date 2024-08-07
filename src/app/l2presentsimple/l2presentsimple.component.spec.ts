import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L2presentsimpleComponent } from './l2presentsimple.component';

describe('L2presentsimpleComponent', () => {
  let component: L2presentsimpleComponent;
  let fixture: ComponentFixture<L2presentsimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [L2presentsimpleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(L2presentsimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
