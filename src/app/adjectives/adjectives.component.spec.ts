import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjectivesComponent } from './adjectives.component';

describe('AdjectivesComponent', () => {
  let component: AdjectivesComponent;
  let fixture: ComponentFixture<AdjectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdjectivesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdjectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
