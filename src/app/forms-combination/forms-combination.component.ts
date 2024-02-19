import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-forms-combination',
  standalone: true,
  imports: [NavbarComponent, FormsModule, CommonModule,FooterComponent, ReactiveFormsModule],
  templateUrl: './forms-combination.component.html',
  styleUrl: './forms-combination.component.css'
})
export class FormsCombinationComponent {
  constructor(public formBuilder: FormBuilder){};
  public form1 : boolean = false; 
  public form3 : boolean = false; 
  public formForm1 : boolean = true; 
  public join : any = ""
  
  public formOne = this.formBuilder.group({
    fullName: ['', Validators.required],
    email: ['', Validators.email],
  })

  public formTwo = this.formBuilder.group({
    City: ['', Validators.required],
    State: ['', Validators.required],
  })

  public formThree = this.formBuilder.group({
    age: ['', Validators.required],
    password: ['', Validators.required],
  })

  goOne(){
    this.form1 = true;
    this.formForm1 = false;
  }

  goThree(){
    this.form1 = false;
    this.form3 = true;
  }

  submit(){
    // this.join = this.formOne + this.formTwo + this.formThree;
    let saveDetails = {
      firstName: this.formOne.value['fullName'],
      email: this.formOne.value['email'],
      city: this.formTwo.value['City'],
      state: this.formTwo.value['State'],
      age: this.formThree.value['age'],
      password: this.formThree.value['password'],
    }

    console.log(saveDetails);
    
  }
  
}
