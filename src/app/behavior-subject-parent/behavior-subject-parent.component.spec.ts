import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorSubjectParentComponent } from './behavior-subject-parent.component';

describe('BehaviorSubjectParentComponent', () => {
  let component: BehaviorSubjectParentComponent;
  let fixture: ComponentFixture<BehaviorSubjectParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehaviorSubjectParentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BehaviorSubjectParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
