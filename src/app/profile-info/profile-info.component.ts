import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { find } from 'rxjs';
import { StudentNavbarComponent } from '../student-navbar/student-navbar.component';

@Component({
  selector: 'app-profile-info',
  standalone: true,
  imports: [FormsModule, StudentNavbarComponent],
  templateUrl: './profile-info.component.html',
  styleUrl: './profile-info.component.css'
})
export class ProfileInfoComponent {
  public firstname:string = ''
  public lastname:string = ''
  public email:string= ''
  public dob:string= ''
  public studentClass:string=''
  public regNumber:string=''

  

  ngOnInit(){
    const currentStudent= JSON.parse(localStorage.getItem('currentUser') || '[]')
    console.log("profile loaded")
    const studentCredentials = JSON.parse(localStorage.getItem('userCredentials') || '[]');
    const email = currentStudent.email;
    let findStudent = studentCredentials.find((student:any)=> student.email == email)
    console.log(findStudent)
   
    console.log(email);
    this.firstname = findStudent.firstname
    this.lastname = findStudent.lastname
    this.email = findStudent.email;
    this.dob = findStudent.dob;
    this.studentClass = findStudent.studentClass
    this.regNumber = findStudent.regNumber
  }

  // editProfile(){
  //   const studentCredentials = JSON.parse(localStorage.getItem('userCredentials') || '[]');
  //   const email = this.currentStudent.email;
  //   let userIndex = studentCredentials.findIndex((user:any)=> user.email == this.email)
  //   // findStudent.email = this.email ;
  //   // findStudent.dob = this.dob;

  //   console.log('Original email:', email);
  //   console.log('Updated email:', this.email);
  //   if (userIndex !== -1) {
  //     const updatedStudent ={
  //       ...studentCredentials[userIndex],
  //        email:this.email
  //     }
  //     studentCredentials[userIndex]= updatedStudent;
  //     localStorage.setItem('userCredentials', JSON.stringify(studentCredentials))
      
  //   }else{
  //     console.log("user Not found")
  //   }
    
    
   
    
  // }

  editProfile() {
    const currentStudent= JSON.parse(localStorage.getItem('currentUser') || '[]')
    const studentCredentials = JSON.parse(localStorage.getItem('userCredentials') || '[]');
    const email = currentStudent.email;
  
    const userIndex = studentCredentials.findIndex((user: any) => user.email === email);
  
    if (userIndex !== -1) {
      // console.log(email);
      // console.log(this.email);
  
      const updatedStudent = {
        ...studentCredentials[userIndex],
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        dob: this.dob
      };
  
      studentCredentials[userIndex] = updatedStudent;
  
      localStorage.setItem('userCredentials', JSON.stringify(studentCredentials));
      localStorage.setItem('currentUser', JSON.stringify(studentCredentials[userIndex]));
  
      console.log(updatedStudent);
    } else {
      console.log('User not found');
    }
  }
  
}
