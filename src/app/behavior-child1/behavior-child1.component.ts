import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviourService } from '../Services/behaviour.service';

@Component({
  selector: 'app-behavior-child1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './behavior-child1.component.html',
  styleUrl: './behavior-child1.component.css'
})
export class BehaviorChild1Component {
  constructor(public behavior: BehaviourService){}

  public behaviorArray : any = [
    {
      firstName: "Herbert",
      lastName: "Bella",
      age: 45,
      email: "bella@gmail.com"
    },
    {
      firstName: "Johson",
      lastName: "Isreal",
      age: 34,
      email: "bella2@gmail.com"
    },
    {
      firstName: "Real",
      lastName: "Blessing",
      age: 22,
      email: "real@gmail.com"
    }
  ]

  sendItem(items:any){
    this.behavior.behavior.next(items);
    // console.log(items);
    
  }
}
