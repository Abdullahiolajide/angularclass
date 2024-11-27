import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CredentialsService } from '../services/credentials.service';
import { StudentNavbarComponent } from '../student-navbar/student-navbar.component';

@Component({
  selector: 'app-course-registration',
  standalone: true,
  imports: [CommonModule, StudentNavbarComponent],
  templateUrl: './course-registration.component.html',
  styleUrl: './course-registration.component.css'
})
export class CourseRegistrationComponent {

  // public studentCourses:any[] =[]
  public email = '';
  public storedCredentials:any[] = []
  public msg:String = ''
  ngOnInit(){
    // let currentUser = JSON.parse(localStorage.getItem('currentUser') || '[]')
    // this.email = currentUser.email
    console.log("reloaded Page")
  }

  registerCourse(course:any){
    let currentUser = JSON.parse(localStorage.getItem('currentUser') || '[]')
    // this.email = currentUser.email
    this.storedCredentials = JSON.parse(localStorage.getItem('userCredentials') || '[]')
    let findUser = this.storedCredentials.find((user:any)=> user.email == currentUser.email)
    let userIndex = this.storedCredentials.findIndex((user:any)=> user.email == currentUser.email)
    let cc = findUser.courses || []
    let check = cc.find((item:any)=> item == course)
    if (check) {
      console.log("course already registered")
      this.msg = "course already registered"
    }else{
    console.log(check)
    findUser = {
      ...findUser, courses: [...cc, course]
    }
    this.msg = "Course Successfully Registered"
  }

    if (userIndex !== -1) {
        this.storedCredentials[userIndex]= findUser;
        localStorage.setItem('userCredentials', JSON.stringify(this.storedCredentials))
      } 
    
}
}
