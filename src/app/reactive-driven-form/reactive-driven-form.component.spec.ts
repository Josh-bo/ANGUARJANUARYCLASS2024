import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveDrivenFormComponent } from './reactive-driven-form.component';

describe('ReactiveDrivenFormComponent', () => {
  let component: ReactiveDrivenFormComponent;
  let fixture: ComponentFixture<ReactiveDrivenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveDrivenFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactiveDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
