import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface signUpInterface {
  firstName : string,
  lastName : string,
  email : string,
  address : string,
  phoneNumber : number,
  password : string
}

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, NavbarComponent, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  constructor(public navigate: Router){}

  public firstName : string = "" 
  public lastName : string = "" 
  public email : string = "" 
  public address : string = "" 
  public phoneNumber : number = 0
  public password : string = "" 
  public getError : string = "" 
  public studentArray : signUpInterface [] = []
  public newArray : any = []
  public confirm : boolean = false

  
  signUp(){
    let studentObject: signUpInterface = {
      firstName : this.firstName,
      lastName: this.lastName,
      email: this.email,
      address : this.address,
      phoneNumber : this.phoneNumber,
      password : this.password,
    }

    let getRes = this.studentArray.push(studentObject);
    if(!getRes){
      this.confirm = true;
      this.getError = "Registration is not successful!"
      setTimeout(() => {
        this.getError = ""
        this.confirm = false;
      }, 3000);
    }
    else{ 
      localStorage.setItem("StudentDetails", JSON.stringify(this.studentArray));
      this.navigate.navigate(['/signIn']);
    }
  }
  

  ngOnInit(){    
        // this.studentArray = JSON.parse(localStorage.getItem("StudentDetails")!)
        if(localStorage['StudentDetails']){
          this.studentArray = JSON.parse(localStorage['StudentDetails']);
          // console.log(this.studentArray);
          
      }
  }
}
