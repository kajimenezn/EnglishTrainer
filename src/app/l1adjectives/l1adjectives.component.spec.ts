import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L1adjectivesComponent } from './l1adjectives.component';

describe('l1adjectivesComponent', () => {
  let component: L1adjectivesComponent;
  let fixture: ComponentFixture<L1adjectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [L1adjectivesComponent]
    })
        .compileComponents();

    fixture = TestBed.createComponent(L1adjectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
