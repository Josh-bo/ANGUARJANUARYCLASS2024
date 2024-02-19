import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorChild1Component } from './behavior-child1.component';

describe('BehaviorChild1Component', () => {
  let component: BehaviorChild1Component;
  let fixture: ComponentFixture<BehaviorChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehaviorChild1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BehaviorChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
