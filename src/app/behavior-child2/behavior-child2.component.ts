import { Component } from '@angular/core';
import { BehaviourService } from '../Services/behaviour.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-behavior-child2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './behavior-child2.component.html',
  styleUrl: './behavior-child2.component.css'
})
export class BehaviorChild2Component {
  constructor(public behavior: BehaviourService ){}
  public behavior_obj:any = [];
  public confirm : boolean = false;
  public msg : string = "No Details is clicked";

  ngOnInit(){
    // console.log(this.behavior.behavior.value);
    this.behavior.behavior.subscribe(response => {
      // console.log(response);
      this.behavior_obj = response;
      console.log(response);
      
      this.confirm = false;
      // this.msg = "No Details is clicked";

    })    
  }
  show(){
      this.confirm = true;
      // console.log(this.confirm);
      
      this.msg = "";    
      console.log(this.msg);
  }
}
