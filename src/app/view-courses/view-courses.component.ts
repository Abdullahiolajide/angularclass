import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StudentNavbarComponent } from '../student-navbar/student-navbar.component';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-courses',
  standalone: true,
  imports: [CommonModule, StudentNavbarComponent, FormsModule, RouterLink],
  templateUrl: './view-courses.component.html',
  styleUrl: './view-courses.component.css'
})
export class ViewCoursesComponent {
  
  public courses = "";
  public userCredentials:any[] = [];
  public studentCourses:any[]=[];
  public isDisabled:boolean = false

  ngOnInit(){
    this.userCredentials = JSON.parse(localStorage.getItem('userCredentials') || '[]')
    let currentUser = JSON.parse(localStorage.getItem('currentUser') || '[]')
    const studentIndex  = this.userCredentials.findIndex((student:any)=> student.email == currentUser.email)
    let findUser = this.userCredentials.find((user:any)=> user.email == currentUser.email)
    console.log(findUser)
    this.studentCourses = findUser.courses
    console.log(this.studentCourses)
    if (this.userCredentials[studentIndex].courses) {
      this.isDisabled = true
    }
  }


  register(){
    let currentUser = JSON.parse(localStorage.getItem('currentUser') || '[]')
    const studentIndex  = this.userCredentials.findIndex((student:any)=> student.email == currentUser.email)
    this.userCredentials[studentIndex].courses =this.courses
    this.studentCourses = this.userCredentials[studentIndex].courses
    console.log(this.courses)
    this.isDisabled = true
    localStorage.setItem('userCredentials', JSON.stringify(this.userCredentials))
    
  }
}
