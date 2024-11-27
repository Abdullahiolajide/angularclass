import { Component } from '@angular/core';
import { ChildBehaviourSubComponent } from '../child-behaviour-sub/child-behaviour-sub.component';
import { FormsModule } from '@angular/forms';
import { MyServiceService } from '../services/my-service.service';
import { CommonModule } from '@angular/common';
import { BehaviourService } from '../services/behaviour.service';

@Component({
  selector: 'app-parent-behavoiur-subject',
  standalone: true,
  imports: [ChildBehaviourSubComponent, FormsModule, CommonModule],
  templateUrl: './parent-behavoiur-subject.component.html',
  styleUrl: './parent-behavoiur-subject.component.css'
})
export class ParentBehavoiurSubjectComponent {
public update:string =''

  // constructor(public userService:MyServiceService, public behavioursub:BehaviourService){}
  // ngOnInit(){
  //   console.log(this.userService.contactAppInfo)
  // }
  // upd(i:number){
  //   console.log(this.userService.contactAppInfo[i])
  //   this.behavioursub.behaviour.next(this.userService.contactAppInfo[i])
  // }
}
