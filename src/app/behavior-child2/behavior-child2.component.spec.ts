import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorChild2Component } from './behavior-child2.component';

describe('BehaviorChild2Component', () => {
  let component: BehaviorChild2Component;
  let fixture: ComponentFixture<BehaviorChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehaviorChild2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BehaviorChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
