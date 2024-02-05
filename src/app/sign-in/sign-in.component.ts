import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [NavbarComponent, FormsModule, CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  constructor(public route : Router){}
  public getAllUsers : any = [] ;
  public email : string = ""; 
  public password : string = ""; 
  public error: string = ""
  public confirm : boolean = false

  ngOnInit(){
    this.getAllUsers = JSON.parse(localStorage["StudentDetails"]);
    console.log(this.getAllUsers);
  }

  signIn(){
    // let newUser = this.getAllUsers.findOne((items:any) => this.getAllUsers === this.password)
    let newUser = this.getAllUsers.find((student:any, index:number) => this.email === student.email && this.password === student.password)
    console.log(newUser);

    if(newUser == undefined){
      this.confirm = true;
      this.error = "This user is not found!"
      setTimeout(() => {
        this.error = "";
        this.confirm = false;
      }, 3000)
    }
    else{
      localStorage.setItem("CurrentUser", JSON.stringify(newUser))
      this.route.navigate(['/dashboard'])
    }
    

  }
}
