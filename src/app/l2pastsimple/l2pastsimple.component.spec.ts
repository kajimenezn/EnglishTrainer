import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L2pastsimpleComponent } from './l2pastsimple.component';

describe('L2pastsimpleComponent', () => {
  let component: L2pastsimpleComponent;
  let fixture: ComponentFixture<L2pastsimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [L2pastsimpleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(L2pastsimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
