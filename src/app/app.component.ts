import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


interface Obj{
  fullname:string,
  phoneNumber:string,
  state:string,
  email:string
}
interface Obj2{
  candidates:[
    {
      name:string,
      age:number,
      level:string,
    },
    {
      name:string,
      age:number,
      level:string,
    }, 
    
  ]
  equipment:[
    {
      wooden:string,
      metal:string
    }
  ],
  set:string

}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'new-angular-class';

  public address:undefined|number
  public firstname = "Abullahi"
  public age=90
  public bool=true

// Without using interface

  public objone:{
    name:string,
    age:number,
    address:string,
    color:string
  }={
    name:'',
    age:56,
    address:'LAGOS',
    color:'red'
  }

  public objtwo:Obj={
    fullname:"Ige Abdullahi Olajide",
    phoneNumber:"09079986279",
    state: "Oyo",
    email: "igeabdulllahiolajide@gmail.com"
  }

  public lastname:string|number='olajide'
  public check:boolean=true

  public arrayone:(number|string|boolean|Obj)[]=[1,2,3,"four", true,
  { fullname:"Ige Abdullahi Olajide",
  phoneNumber:"09079986279",
  state: "Oyo",
  email: "igeabdulllahiolajide@gmail.com"}
]
  public arraytwo:(number)[]=[1,2,3,4,4,55,6,]

  public schoolInfo:Obj2={
    candidates:[
      {
        name:"Abdullahi",
        age:19,
        level:"level 4",
      },
      {
        name:"Abdullahi",
        age:19,
        level:"level 4",
      },
      
      
    ],
    equipment:[
      {
        wooden:"chair",
        metal:"table"
      }
      
    ],
    set:"2023/2024"
  };

 

  // ngOnInit() {
  //   this.loopThroughData(); 
  // }

  
  
  

  // signup(){
  //   this.lastname=90
  //   this.check=false
  //   this.address = 40
  

  // }
}

