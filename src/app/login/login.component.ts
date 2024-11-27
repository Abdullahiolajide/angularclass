import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CredentialsService } from '../services/credentials.service';
import { Router, RouterLink} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public email:String = '';
  public password:String = '';
  public storedCredentials:any[] = [];
  public errMessage:String = '';

  constructor(public credentialService:CredentialsService, public route:Router){}
  ngOnInit(){
    this.storedCredentials = this.credentialService.retrievedCredentials

  }

  login(){
   
    const findUser = this.storedCredentials.find((user:any)=> user.email == this.email && user.password == this.password)
    const userIndex = this.storedCredentials.findIndex((user:any)=> user.email == this.email && user.password == this.password)

      this.storedCredentials = JSON.parse(localStorage.getItem('userCredentials') || '[]')

      if (findUser) {
        if (findUser.status == "deactivated") {
          alert("meet with admin")
        }else{
          alert("fre to go")
          const currentUserObj = this.storedCredentials[userIndex];
          this.credentialService.currentUser = currentUserObj
          localStorage.setItem('currentUser', JSON.stringify(currentUserObj))
      
         this.route.navigate(['/userDashboard'])
          
        }
      }else{
        this.errMessage = "Invalid Credentials"
      }
    }

  }

