import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StudentNavbarComponent } from '../student-navbar/student-navbar.component';

@Component({
  selector: 'app-view-classmates',
  standalone: true,
  imports: [CommonModule, StudentNavbarComponent],
  templateUrl: './view-classmates.component.html',
  styleUrl: './view-classmates.component.css'
})
export class ViewClassmatesComponent {
  public userCredentials:any[] = []
  public currentUser:any = ''
  public classmates:any[]=[];
  public email = ''

  ngOnInit(){
    this.userCredentials = JSON.parse(localStorage.getItem('userCredentials') || '[]')
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '[]')
    this.email = this.currentUser.email

    console.log(this.currentUser)
    console.log("currents class:", this.currentUser.studentClass)
    console.log(this.userCredentials)
   let findStudents = this.userCredentials.filter((student:any)=> student.studentClass === this.currentUser.studentClass && student.email != this.currentUser.email)
   console.log(findStudents)
   this.classmates = findStudents;
 }
}
