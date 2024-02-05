import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MiddlePageComponent } from './middle-page/middle-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { FooterComponent } from './footer/footer.component';
interface ObjectName {
    firstName : String,
    lastName : String,
    age : Number
}
interface ObjectTwo {
    firstName : String,
    lastName : String,
    email : String,
}
interface ObjectName3 {
  firstName : String,
  lastName : String,
  age : Number,
  address : String,
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LandingPageComponent, NavbarComponent, MiddlePageComponent, ThirdPageComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'JanuaryClass2024';
  firstName = 'Joshua';
  lastName = 'Bamidele';
  union : undefined | number | string | boolean;
  styling = "form-control border-warning w-50 my-2";
  special = true;

  // TypeScript
  address : string = 'No 10.';
  email : string = 'Ola@gmail.com';
  age : number = 20;

  obj1 : ObjectName = {
    firstName: "Segun",
    lastName: "Blessing",
    age : 48
  }
  
  array1 : number [] = [1,23,40];
  array2 : string [] = ["Olumide", "Ayomide"];
  array3 : (string | number | boolean ) [] = ["Olumide", 933, false];
  array4 : ObjectName3 [] = [
    {
      firstName: "Segun",
      lastName: "Blessing",
      age : 48,
      address :  "Oyo state"
    },
    {
      firstName: "Oyin",
      lastName: "Tobilola",
      age : 16,
      address :  "Ogun state"
    },
  ];
 
  
  // ngOnInit(){
  //   // alert(this.firstName);
  //   console.log(this.firstName);
    
  //   // this.union = this.firstName, this.lastName, this.address, this.age
  // }

  // Union, Inference, Interface;

  changeColor(){
    this.special = !this.special
    // if(this.special == true){
    //   this.special = false;
    // }
    // else if(this.special == false){
    //   this.special = true;
    // }
  }
}
