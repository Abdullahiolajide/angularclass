import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-contact-app',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './contact-app.component.html',
  styleUrl: './contact-app.component.css'
})
export class ContactAppComponent {
  public firstname:string=''
  public lastname:string=''
  public email:string=''
  public phonenumber:string=''
  public credentialArray:any =''


constructor(public route:Router){}

  ngOnInit() {
    this.display()
  }
  display(){
    const storedCredentials = localStorage.getItem("userCredentials");
    if (storedCredentials) {
      this.credentialArray = JSON.parse(storedCredentials);
    };
  }

  create(){
    let oldCredntials = JSON.parse(localStorage.getItem("userCredentials") || "[]");
    if(this.firstname!='' && this.lastname!='' && this.email!='' && this.phonenumber!=''){
      let contactObj={
        Firstname:this.firstname,
        lastname:this.lastname,
        email:this.email,
        Phonenumber:this.phonenumber
      }
      oldCredntials.push(contactObj)
      localStorage.setItem("userCredentials", JSON.stringify(oldCredntials))
      console.log(oldCredntials)
      this.credentialArray = oldCredntials
      console.log(this.credentialArray)
    }else{
      alert("Input fields cannot be empty")
     
    }
    

  }

 
  deletee(index:number) {
    this.credentialArray.splice(index, 1);
    localStorage.setItem("userCredentials", JSON.stringify(this.credentialArray));
  }
  viewContact(index:number){
    localStorage.setItem("viewObject", JSON.stringify(this.credentialArray[index]));
    console.log(localStorage['viewObject'])
  }

  routeToEdit(index:number){
    console.log(index)
    this.route.navigate(['/contact/edit/' + index])
      localStorage.setItem("editObject", JSON.stringify(this.credentialArray[index])!)
    
}
}
