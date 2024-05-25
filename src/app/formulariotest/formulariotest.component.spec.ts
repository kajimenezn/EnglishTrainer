import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariotestComponent } from './formulariotest.component';

describe('FormulariotestComponent', () => {
  let component: FormulariotestComponent;
  let fixture: ComponentFixture<FormulariotestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormulariotestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormulariotestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
