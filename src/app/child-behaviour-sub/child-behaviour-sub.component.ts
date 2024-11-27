import { Component } from '@angular/core';
import { BehaviourService } from '../services/behaviour.service';

@Component({
  selector: 'app-child-behaviour-sub',
  standalone: true,
  imports: [],
  templateUrl: './child-behaviour-sub.component.html',
  styleUrl: './child-behaviour-sub.component.css'
})
export class ChildBehaviourSubComponent {
  // constructor(public behavioursub:BehaviourService){}
  // public data:any=''

  // ngOnInit(){
  //   // console.log(this.behavioursub.behaviour)
  //   this.behavioursub.behaviour.subscribe(data=>{
  //     // console.log(data)
  //     this.data = data
  //   })
  // }
}
