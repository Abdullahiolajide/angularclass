import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './student-navbar.component.html',
  styleUrl: './student-navbar.component.css'
})
export class StudentNavbarComponent {
  public base64String = "";
  public firstname = "";

  ngOnInit(){
    let cUser = JSON.parse(localStorage.getItem('currentUser') || '[]')
    this.firstname = cUser.firstname
    this.base64String = cUser.profilePicture
    let studentCredentials = JSON.parse(localStorage.getItem('userCredentials') || '[]')
    let userIndex = studentCredentials.findIndex((student:any)=> student.email == cUser.email)

    this.base64String = studentCredentials[userIndex].profilePicture
  
}
}
