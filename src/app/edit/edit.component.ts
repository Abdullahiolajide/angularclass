import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  public contactInfo2:any ={}
  public firstname:string = ''
  public lastname:string = ''
  public email:string =''
  public phonenumber:string =''
  

  constructor(public actroute:ActivatedRoute, public route:Router){}
  ngOnInit(){
    console.log(this.actroute.snapshot.params["id"])
    this.contactInfo2 = JSON.parse(localStorage.getItem('editObject')!)

    console.log(this.contactInfo2)
    this.firstname = this.contactInfo2.Firstname
    this.lastname = this.contactInfo2.lastname
    this.email = this.contactInfo2.email
    this.phonenumber = this.contactInfo2.Phonenumber
    
    
  }

  editFunc(){
    let tobeedited = JSON.parse(localStorage.getItem("userCredentials") || "[]")
    let i = this.actroute.snapshot.params["id"]
    
    let updatedObj = {
      Firstname:this.firstname,
      lastname:this.lastname,
      email:this.email,
      Phonenumber:this.phonenumber
    }
    
    if(this.firstname!='' && this.lastname!='' && this.email!='' && this.phonenumber!=''){
      tobeedited[i] = updatedObj
      alert("Edited Successful")
      this.route.navigate(["/contact"])
      localStorage.setItem("userCredentials", JSON.stringify(tobeedited))
    }else{
      alert("Input fields cannot be empty")
    }
    // console.log(tobeedited)
    // console.log(this.contactInfo2)
   
  }
}
