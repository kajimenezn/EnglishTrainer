import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L4pastperfectComponent } from './l4pastperfect.component';

describe('L4pastperfectComponent', () => {
  let component: L4pastperfectComponent;
  let fixture: ComponentFixture<L4pastperfectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [L4pastperfectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(L4pastperfectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
