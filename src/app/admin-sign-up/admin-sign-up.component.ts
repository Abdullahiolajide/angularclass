import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-sign-up',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-sign-up.component.html',
  styleUrl: './admin-sign-up.component.css'
})
export class AdminSignUpComponent {

  constructor(public route:Router){}
    public firstname:string = '';
    public lastname:string ='';
    public email:string = '';
    public password:string = '';
    public adminCredentials:any[] = [];
    public msg:string = '';

    signUp(){
      const storedAdminCredentials = JSON.parse(localStorage.getItem('adminCredentials') || '[]')
      this.adminCredentials = storedAdminCredentials
      
      let checkEmail = storedAdminCredentials.find((admin:any)=>admin.email== this.email)

      if (checkEmail) {
        this.msg = "Email is already registered";
      }else{

        const adminObj ={
          firstname:this.firstname,
          lastname:this.lastname,
          email:this.email,
          password:this.password
        }
  
        this.adminCredentials.push(adminObj);
  
        localStorage.setItem('adminCredentials',JSON.stringify(this.adminCredentials))
        this.route.navigate(['/adminlogin'])
      }
    }
}
