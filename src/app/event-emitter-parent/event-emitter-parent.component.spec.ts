import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventEmitterParentComponent } from './event-emitter-parent.component';

describe('EventEmitterParentComponent', () => {
  let component: EventEmitterParentComponent;
  let fixture: ComponentFixture<EventEmitterParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventEmitterParentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventEmitterParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
