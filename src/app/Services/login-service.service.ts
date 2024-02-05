import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor() { }
  public item = "My name is Joshua";

  returnItem(user:any){
    return this.item;
  }

  returnLocalUsers(){
    const getLocalStorage = JSON.parse(localStorage['Contacts']);
    return getLocalStorage;
  }
}
