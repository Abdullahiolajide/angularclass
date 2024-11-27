import { Component } from '@angular/core';
import { BehaviourService } from '../services/behaviour.service';

@Component({
  selector: 'app-sub-cnt-behaviour',
  standalone: true,
  imports: [],
  templateUrl: './sub-cnt-behaviour.component.html',
  styleUrl: './sub-cnt-behaviour.component.css'
})
export class SubCntBehaviourComponent {
  constructor(public behavioursub:BehaviourService){}
  public data:any=''

  ngOnInit(){
    // console.log(this.behavioursub.behaviour)
    this.behavioursub.behaviour.subscribe(data=>{
      // console.log(data)
      this.data = data
    })
  }
}
