import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L4presentperfectComponent } from './l4presentperfect.component';

describe('L4presentperfectComponent', () => {
  let component: L4presentperfectComponent;
  let fixture: ComponentFixture<L4presentperfectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [L4presentperfectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(L4presentperfectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
