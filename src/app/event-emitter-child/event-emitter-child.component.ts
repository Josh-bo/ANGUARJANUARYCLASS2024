import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-emitter-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './event-emitter-child.component.html',
  styleUrl: './event-emitter-child.component.css'
})
export class EventEmitterChildComponent {
  @Input() collectText = '';

  public sendRes: any = ''
  @Output() eventEmit = new EventEmitter

  sendBack(){
    this.eventEmit.emit(this.sendRes);
    // this.sendRes = ""
  }
}
