import { Component } from '@angular/core';
import { CredentialsService } from '../services/credentials.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {
  constructor(public credentialService:CredentialsService, public route:Router){}
  base64String: string | null = null;

  public firstname = ''
  public lastname = ''
  public email = ''
  public password = ''

  ngOnInit(){
      let cUser = JSON.parse(localStorage.getItem('currentUser') || '[]')
      this.firstname = cUser.firstname
      this.lastname = cUser.lastname
      this.email = cUser.email
      this.password = cUser.password
      this.base64String = cUser.profilePicture
      let studentCredentials = JSON.parse(localStorage.getItem('userCredentials') || '[]')
      let userIndex = studentCredentials.findIndex((student:any)=> student.email == cUser.email)

      console.log(userIndex)

      this.base64String = studentCredentials[userIndex].profilePicture
    
  }
  logout(){
    localStorage.removeItem('currentUser');
    this.route.navigate(['/'])
      
  }


}
