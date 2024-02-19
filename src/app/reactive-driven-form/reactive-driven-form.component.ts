import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-driven-form',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-driven-form.component.html',
  styleUrl: './reactive-driven-form.component.css'
})
export class ReactiveDrivenFormComponent {
  constructor(public formBuilder: FormBuilder){};
  public formOne = this.formBuilder.group({
    fullName: ['', Validators.required],
    email: ['', Validators.email],
    password: ['', Validators.required],
    // fullName: ['Joshua', Validators.required],
    // email: ['example.com'],
    // password: ['1234'],
  })

  ngOnInit(){
    console.log(this.formOne.value);
    // this.formOne.controls['fullName'].setValue('');    
    // this.formOne.controls['email'].setValue('');    
    // this.formOne.controls['password'].setValue('');    
  }
}
