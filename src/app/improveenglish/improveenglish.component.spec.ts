import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImproveenglishComponent } from './improveenglish.component';

describe('ImproveenglishComponent', () => {
  let component: ImproveenglishComponent;
  let fixture: ComponentFixture<ImproveenglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImproveenglishComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImproveenglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
