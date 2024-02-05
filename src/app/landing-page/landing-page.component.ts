import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { MiddlePageComponent } from '../middle-page/middle-page.component';
import { ThirdPageComponent } from '../third-page/third-page.component';
import { FooterComponent } from '../footer/footer.component';
import { LoginServiceService } from '../Services/login-service.service';
interface eachUserDetails {
  firstName : string;
  lastName : string;
  email : string;
  phNumb : Number ;
  ha : string ;
  gender : string ;
}

@Component({
selector: 'app-landing-page',
  standalone: true,
  imports: [FormsModule, CommonModule, NavbarComponent, MiddlePageComponent, ThirdPageComponent, FooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  constructor(public service: LoginServiceService){}
  public firstName: string = "";
  public lastName: string = "";
  public email: string = "";
  public phNumb: Number = 0;
  public ha: string = "";
  public gender: string = "";
  public collectValue: string = "";
  public usersArray: eachUserDetails[] = [];
  public oldLocal : any = [] 
  public getContactArray = []

  send() {
    console.log(this.service.returnItem);
    
    const newDetails: eachUserDetails = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phNumb: this.phNumb,
      ha: this.ha,
      gender: this.gender,
    };
  
      this.usersArray.push(newDetails)
      // console.log(this.usersArray);
      localStorage.setItem("Contacts", JSON.stringify(this.usersArray));
    }

    ngOnInit(){
      if(localStorage['Contacts']){
        // console.log(localStorage['Contacts']);
        this.usersArray = JSON.parse(localStorage['Contacts']);
      }
    }

    checkIndex(i: number){
      alert(i)
    }

    DeleteIndex(i: number){
      
    }
  }

