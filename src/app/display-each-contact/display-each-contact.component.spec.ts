import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayEachContactComponent } from './display-each-contact.component';

describe('DisplayEachContactComponent', () => {
  let component: DisplayEachContactComponent;
  let fixture: ComponentFixture<DisplayEachContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayEachContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayEachContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
