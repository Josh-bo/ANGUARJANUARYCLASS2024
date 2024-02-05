import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-display-each-contact',
  standalone: true,
  imports: [NavbarComponent, CommonModule, FormsModule, FooterComponent],
  templateUrl: './display-each-contact.component.html',
  styleUrl: './display-each-contact.component.css'
})
export class DisplayEachContactComponent {
  public getIndex : number = 0;
  public displayArray: any = [];
  public confirmation: boolean = false;
  public firstName:string = "";
  public lastName:string = "";
  public email:string = "";
  public phone:number = 0;
  public address:string = "";
  public gender:string = "";

  constructor(public activate : ActivatedRoute, public goBack : Router){
      this.getIndex = this.activate.snapshot.params['index'];
  }



  ngOnInit(){
    const getLocal = JSON.parse(localStorage['Contacts']);
    this.displayArray.pop();
    this.displayArray = [getLocal[this.getIndex]];
  }

  deleteUser(index: number) {
    const users: any[] = JSON.parse(localStorage['Contacts']) || [];
    const indexToRemove = this.getIndex;
   
    if (indexToRemove >= 0 && indexToRemove < users.length) {
      const updatedUsers = users.filter((user: any, i: number) => i != indexToRemove);
    
      localStorage.setItem('Contacts', JSON.stringify(updatedUsers));
      this.goBack.navigate(['/addContact']);
    } else {
      console.error('Invalid user index:', indexToRemove);
    }
  }

  editUser(){
    this.confirmation = !this.confirmation
  }

  confirm(index: number){
    const getOldUser = JSON.parse(localStorage['Contacts']);   

      getOldUser[index].firstName = this.firstName;
      getOldUser[index].lastName = this.lastName;
      getOldUser[index].email = this.email;
      getOldUser[index].ph = this.phone;
      getOldUser[index].ha = this.address;
      getOldUser[index].gender = this.gender;
      localStorage.setItem('Contacts', JSON.stringify(getOldUser));
      this.confirmation = false;      
      this.ngOnInit();
  }

  back(){
    this.goBack.navigate(['addContact'])
  }
}

