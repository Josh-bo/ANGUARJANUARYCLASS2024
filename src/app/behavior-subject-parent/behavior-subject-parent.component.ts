import { Component } from '@angular/core';
import { BehaviorChild1Component } from '../behavior-child1/behavior-child1.component';
import { BehaviorChild2Component } from '../behavior-child2/behavior-child2.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-behavior-subject-parent',
  standalone: true,
  imports: [BehaviorChild1Component, BehaviorChild2Component, NavbarComponent],
  templateUrl: './behavior-subject-parent.component.html',
  styleUrl: './behavior-subject-parent.component.css'
})
export class BehaviorSubjectParentComponent {

}
