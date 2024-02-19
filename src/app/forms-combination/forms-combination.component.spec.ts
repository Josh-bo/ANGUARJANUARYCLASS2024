import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsCombinationComponent } from './forms-combination.component';

describe('FormsCombinationComponent', () => {
  let component: FormsCombinationComponent;
  let fixture: ComponentFixture<FormsCombinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsCombinationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormsCombinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
