import { Component, inject } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [MatButtonModule, MatStepperModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css'
})

export class StepperComponent {
  
  public _formBuilder = inject(FormBuilder)
  
  firstFormGroup = this._formBuilder.group({
    fullName: ['', Validators.required],
    age: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    phoneNumber: ['', Validators.required],
    address: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    country: ['', Validators.required],
    city: ['', Validators.required],
    postalCode: ['', Validators.required],
  });
  isLinear = false;

  submit(){
    // console.log(this.firstFormGroup.value)
    const userInformation  = {
      ...this.firstFormGroup.value,
      ...this.secondFormGroup.value,
      ...this.thirdFormGroup.value
    }
    console.log(userInformation)
  }

}
