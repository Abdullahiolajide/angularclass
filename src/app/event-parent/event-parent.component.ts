import { Component } from '@angular/core';
import { EventChildComponent } from '../event-child/event-child.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-parent',
  standalone: true,
  imports: [EventChildComponent, FormsModule],
  templateUrl: './event-parent.component.html',
  styleUrl: './event-parent.component.css'
})
export class EventParentComponent {
  public msgToChild = '';
  public response = '';
  public AmsgToChild = ''

  receivemsg(data:any){
    this.response = data
  }
  sendToChild(){
    this.AmsgToChild = this.msgToChild; 
  }
}
