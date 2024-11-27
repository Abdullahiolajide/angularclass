import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  formOne:FormGroup;

  constructor(public builder:FormBuilder){
    this.formOne=this.builder.group({
      fname:['', Validators.minLength(4)],
      pnumber:['', [Validators.minLength(11), Validators.required]],
      lname:['', Validators.minLength(3)],
      email:['', Validators.required],
      cbox: [false]
    })
  }
  public noteArray:(any)[]=[]

  reactivef(){


    console.log(this.formOne.value)
    this.noteArray.push(this.formOne.value)
    console.log(this.noteArray)
    localStorage.setItem('noteArray', JSON.stringify(this.noteArray))
  }
}
