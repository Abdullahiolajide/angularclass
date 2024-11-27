import { Component } from '@angular/core';
import { MyServiceService } from '../services/my-service.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(public userService:MyServiceService){}
  ngOnInit(){
    console.log(this.userService.contactAppInfo)
  }
}
// use your sevice to return our contact app and then displaying what is coming from there using another component