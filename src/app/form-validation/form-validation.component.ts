import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form-validation.component.html',
  styleUrl: './form-validation.component.css'
})
export class FormValidationComponent {

  public firstname:string = '';
  public lastname:string = '';
  public age:number|null= null;
  public password:string = '';
  public checkbox:any ='';

  // ngOnInit(){
  //   console.log(this)
  // }

}
