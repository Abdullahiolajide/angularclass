import { Component } from '@angular/core';
import { CredentialsService } from '../services/credentials.service';
import { FormsModule } from '@angular/forms';
import { StudentNavbarComponent } from '../student-navbar/student-navbar.component';

@Component({
  selector: 'app-update-password',
  standalone: true,
  imports: [FormsModule, StudentNavbarComponent],
  templateUrl: './update-password.component.html',
  styleUrl: './update-password.component.css'
})
export class UpdatePasswordComponent {
  constructor(public credentialService:CredentialsService){}
  public prevPassword:String ='';
  public newPassword:String ='';
  public confirmPassword:String ='';
  private userPrevPassword:String='';
  private userEmail:String='';
  public userMsg:String='';
  

  updatePassword(){
    const storedCredentials = JSON.parse(localStorage.getItem('userCredentials') || '[]')
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '[]')
      this.userPrevPassword = currentUser.password
      this.userEmail = currentUser.email
    
    let findUser = storedCredentials.find((user:any)=> user.email == this.userEmail)
    let studentIndex = storedCredentials.findIndex((user:any)=> user.email == this.userEmail)
    
    if (this.prevPassword == this.userPrevPassword) {
      if (this.newPassword == this.confirmPassword) {
        console.log(findUser)
        findUser.password = this.newPassword
        // this.credentialService.currentUser.next({...findUser})
        
        localStorage.setItem('userCredentials', JSON.stringify(storedCredentials))
        localStorage.setItem('currentUser', JSON.stringify(storedCredentials[studentIndex]))
        // localStorage.setItem('currentUser', JSON.stringify(findUser))
        this.userMsg = 'Updated Successfully'
      }else{
        this.userMsg = "Passwords do not match"
      }
    }else{
      this.userMsg = "Wrong Password"
      console.log(this.userPrevPassword)
    }
  }
}
