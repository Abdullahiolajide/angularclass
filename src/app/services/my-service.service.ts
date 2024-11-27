import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }

  public msg:string='i am going to the market'
  public lastName:string= "Owolabi"
  public firstName:string ="Oyindamola"
  public age:number = 12

  public myArray:any =[
    {
      firstName:"Abdullahi",
      lastName: "Olajide",
      age: 1
    },
    {
      firstName:"Ayomide",
      lastName: "Ayinde",
      age: 2
    },
    {
      firstName:"John",
      lastName: "Mike",
      age: 3
    },
    {
      firstName:"Nick",
      lastName: "Jane",
      age: 4
    },
    {
      firstName:"Owolabi",
      lastName: "Toyose",
      age: 5
    },
    {
      firstName:"Ricky",
      lastName: "Marco",
      age: 6
    },
    {
      firstName:"Mirage",
      lastName: "faze",
      age: 7
    },
    {
      firstName:"Tobi",
      lastName: "Manslade",
      age: 8
    }
  ]
  
  public contactAppInfo = JSON.parse(localStorage.getItem("userCredentials") || "[]")

  public getLastName(){
    return this.lastName
  }
}
