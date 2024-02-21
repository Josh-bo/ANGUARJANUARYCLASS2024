import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventEmitterChildComponent } from './event-emitter-child.component';

describe('EventEmitterChildComponent', () => {
  let component: EventEmitterChildComponent;
  let fixture: ComponentFixture<EventEmitterChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventEmitterChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventEmitterChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
