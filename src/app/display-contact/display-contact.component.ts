import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-display-contact',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './display-contact.component.html',
  styleUrl: './display-contact.component.css'
})
export class DisplayContactComponent {

  constructor(public activated: ActivatedRoute, public routes : Router){
    console.log(this.activated.snapshot.params['index']); 
  }

  // PROGRAMATIC REDIRECTION
  check(){
    this.routes.navigate(['home']);
  }
}
