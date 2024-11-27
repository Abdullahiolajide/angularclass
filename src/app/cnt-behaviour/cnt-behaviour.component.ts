import { Component } from '@angular/core';
import { SubCntBehaviourComponent } from '../sub-cnt-behaviour/sub-cnt-behaviour.component';
import { MyServiceService } from '../services/my-service.service';
import { BehaviourService } from '../services/behaviour.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cnt-behaviour',
  standalone: true,
  imports: [SubCntBehaviourComponent, CommonModule, FormsModule],
  templateUrl: './cnt-behaviour.component.html',
  styleUrl: './cnt-behaviour.component.css'
})
export class CntBehaviourComponent {
  public update:string =''
  public trr:any = document.getElementById("trr")

  constructor(public userService:MyServiceService, public behavioursub:BehaviourService){}
  ngOnInit(){
    console.log(this.userService.contactAppInfo)
  }

  upd(i:number){
    console.log(this.userService.contactAppInfo[i])
    this.behavioursub.behaviour.next(this.userService.contactAppInfo[i])
  }
}
