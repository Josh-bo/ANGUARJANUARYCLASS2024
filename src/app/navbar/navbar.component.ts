import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginServiceService } from '../Services/login-service.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public service: LoginServiceService){}

  ngOnInit(){
    console.log(this.service.returnItem);
  }
}
