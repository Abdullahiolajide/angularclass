import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  public firstname:string = ''
  public studentCredentials:any[] = [];

  ngOnInit(){
    const currentAdmin = JSON.parse(localStorage.getItem('currentAdmin') || '[]')
    const studentCredentials = JSON.parse(localStorage.getItem('userCredentials') || '[]')
    this.firstname = currentAdmin.firstname
    this.studentCredentials = studentCredentials
  }
  deactivate(i:number){
    console.log("function deactivate")
    let getStudent = this.studentCredentials[i]
    const newStudent = {
      ...getStudent, status:"deactivated"
    }
    this.studentCredentials[i] = newStudent
    console.log("check",this.studentCredentials[i])
    localStorage.setItem('userCredentials', JSON.stringify(this.studentCredentials))

      }


}
