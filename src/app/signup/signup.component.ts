import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  public firstname:String = '';
  public lastname:String = '';
  public email:String = '';
  public password:String = '';
  public cbox:Boolean = false;
  public userArray:any[] =[];
  public checkEmail:String= '';
  public studentClass:String = ''
  public department:String = ''
  public gender:String = ''
  public dob:String = ''

  constructor(public route:Router){}

  ngOnInit(){
    this.userArray = JSON.parse(localStorage.getItem('userCredentials') || "[]")
  }
  
  signUp(){
    const checkEmail = this.userArray.find((user:any)=> user.email == this.email)
    if (checkEmail) {
      this.checkEmail = "Email Already Exists"
    }
    else{
      const userObj = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
        studentClass: this.studentClass,
        department: this.department,
        gender: this.gender,
        dob:this.dob,
        profilePicture: "https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg",
        regNumber: this.userArray.length+34+'/' + this.email.split('@')[0]+'/' +this.userArray.length*2
      }
      
  
      this.userArray.push(userObj)
      
      localStorage.setItem('userCredentials', JSON.stringify(this.userArray))
      this.route.navigate(["/login"])
      console.log("upda")
    }
  }
}
