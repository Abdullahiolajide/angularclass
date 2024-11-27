import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  public email:string = '';
  public password:string = '';
  public msg:string = '';
  constructor(public route:Router){}

  signIn(){
    const adminCredentials = JSON.parse(localStorage.getItem('adminCredentials') || '[]')
    let checkAdmin = adminCredentials.find((admin:any)=> admin.password  == this.password && admin.email == this.email)
    let adminIndex = adminCredentials.findIndex((admin:any)=> admin.password  == this.password && admin.email == this.email)

    if (checkAdmin) {
      this.route.navigate(['/admindashboard'])
      console.log("User Logged In")
      console.log(adminCredentials)
      console.log(checkAdmin)
      console.log(adminIndex)
      localStorage.setItem('currentAdmin', JSON.stringify(adminCredentials[adminIndex]))
    }
    else{
        this.msg = "Invalid Credentials"
    }
  }
}
