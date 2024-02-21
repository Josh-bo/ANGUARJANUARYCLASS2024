import { Component } from '@angular/core';
import { EventEmitterChildComponent } from '../event-emitter-child/event-emitter-child.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-emitter-parent',
  standalone: true,
  imports: [EventEmitterChildComponent, FormsModule],
  templateUrl: './event-emitter-parent.component.html',
  styleUrl: './event-emitter-parent.component.css'
})
export class EventEmitterParentComponent {
  public text : any = '';
  public parentIsTyping : any = 'typing';
  public newText : any = '';
  public receiveText : any = '';
  
  send(){
    this.newText= this.text;
    this.text = ""
    console.log(this.newText);
  }

  parentTyping(){

  }

  receiveMsg(e:any){
    // console.log(e);
    this.receiveText = e
    
  } 
}
