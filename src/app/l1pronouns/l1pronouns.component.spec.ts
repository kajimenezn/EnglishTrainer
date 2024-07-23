import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L1pronounsComponent } from './l1pronouns.component';

describe('L1pronounsComponent', () => {
  let component: L1pronounsComponent;
  let fixture: ComponentFixture<L1pronounsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [L1pronounsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(L1pronounsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
