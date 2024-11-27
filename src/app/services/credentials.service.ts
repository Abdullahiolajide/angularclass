import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {

  constructor() { }
  public retrievedCredentials = JSON.parse(localStorage.getItem('userCredentials') || "[]");
  public storedCurrentUser = JSON.parse(localStorage.getItem('currentUser') || "[]");
  public currentUser = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  }
  // public login(){
  //   this.retrievedCredentials = JSON.parse(localStorage.getItem('userCredentials') || "[]");
  // }

  public logout(){
    localStorage.removeItem('currentUser') 
  }
}
