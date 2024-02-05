import { Component } from '@angular/core';
import { LoginServiceService } from '../Services/login-service.service';

@Component({
  selector: 'app-service-component',
  standalone: true,
  imports: [],
  templateUrl: './service-component.component.html',
  styleUrl: './service-component.component.css'
})
export class ServiceComponentComponent {
  constructor(public service : LoginServiceService ){}

  public user = "New Joshua" ;
  public nameFromService : string = ""

  ngOnInit(){
    console.log(this.service.returnItem(this.user));
    this.nameFromService = this.service.item;
  }
}
