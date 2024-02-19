import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  public newDate : any = "";

  ngOnInit(){
    this.newDate = new Date();
    console.log(this.newDate);
    
  }
}
