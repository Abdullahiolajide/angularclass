import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MyServiceService } from '../services/my-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterLink],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  constructor(public userService:MyServiceService){}
  ngOnInit(){
    console.log(this.userService.msg)
  }

}
