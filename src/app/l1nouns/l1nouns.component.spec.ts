import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L1nounsComponent } from './l1nouns.component';

describe('L1nounsComponent', () => {
  let component: L1nounsComponent;
  let fixture: ComponentFixture<L1nounsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [L1nounsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(L1nounsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
