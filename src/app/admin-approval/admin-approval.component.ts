import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-approval',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-approval.component.html',
  styleUrl: './admin-approval.component.css'
})
export class AdminApprovalComponent {

  public firstname:string = ''
  public studentCredentials:any[] = [];

  ngOnInit(){
    const currentAdmin = JSON.parse(localStorage.getItem('currentAdmin') || '[]')
    const studentCredentials = JSON.parse(localStorage.getItem('userCredentials') || '[]')
    this.firstname = currentAdmin.firstname
    this.studentCredentials = studentCredentials
  }
  approveReceipt(i:number){
    console.log("function deactivate")
    let getStudent = this.studentCredentials[i]
    const newStudent = {
      ...getStudent, receiptStatus:"Approved"
    }
    this.studentCredentials[i] = newStudent
    console.log("check",this.studentCredentials[i])
    localStorage.setItem('userCredentials', JSON.stringify(this.studentCredentials))

      }

}
