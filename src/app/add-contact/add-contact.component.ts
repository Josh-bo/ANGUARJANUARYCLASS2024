import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
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
  selector: 'app-add-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css'
})
export class AddContactComponent {
  public firstName: string = "";
  public lastName: string = "";
  public email: string = "";
  public phNumb: Number = 0;
  public ha: string = "";
  public gender: string = "";
  public usersArray: eachUserDetails[] = [];
  public displayOneUser :eachUserDetails[] = [];
  public newIndex: number = 0;

  constructor(private router: Router, public service: LoginServiceService) {}

  send() {
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
      // if(localStorage['Contacts']){
      //   // console.log(localStorage['Contacts']);
      //   this.usersArray = JSON.parse(localStorage['Contacts']);
      // }
      
      // console.log(this.service.returnLocalUsers());
      this.usersArray = this.service.returnLocalUsers();
      // console.log(this.usersArray);
      
      
      
    }

    checkIndex(i: number){
      // console.log(i);
      this.newIndex = i
      this.viewUser(this.newIndex);
      
      const getUser = JSON.parse(localStorage['Contacts']);
      this.displayOneUser.pop()
      this.displayOneUser.push(getUser[i]);
    }

    viewUser(index: number){
    const users = JSON.parse(localStorage['Contacts']) || [];

    if (index >= 0 && index < users.length) {
      this.router.navigate(['/displayOneUser', index]);
    } else {
      console.error('Invalid user index:', index);
      // Handle invalid index as needed
    }
  }
  
}
