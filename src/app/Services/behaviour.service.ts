import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviourService {

  constructor() { }
  public behavior = new BehaviorSubject<any>({
    // firstName: "Herbert",
    // lastName: "Bella",
    // age: 19,
    // email: "bella@gmail.com"
  });
}
