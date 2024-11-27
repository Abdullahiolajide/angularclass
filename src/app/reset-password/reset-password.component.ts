import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {
  public email = "";
  public newPassword:String ='';
  public confirmPassword:String =''; 
  public userMsg:String='';

resetPassword(){
  const storedCredentials = JSON.parse(localStorage.getItem('userCredentials') || '[]')

    let studentIndex = storedCredentials.findIndex((user:any)=> user.email == this.email)
if(studentIndex == -1){
  this.userMsg = "Email does not exist"
}else{

  if(this.newPassword == this.confirmPassword){
    storedCredentials[studentIndex].password = this.newPassword 
    localStorage.setItem('userCredentials', JSON.stringify(storedCredentials))
    this.userMsg = 'Passsword has been reset'  
  }else{
    this.userMsg = "Passwords do not match"
  }
}}
}
