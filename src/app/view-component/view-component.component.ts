import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-component',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './view-component.component.html',
  styleUrl: './view-component.component.css'
})


export class ViewComponentComponent {

  public contactInfo:any={}

  ngOnInit(){
    // console.log(localStorage["viewObject"])
    this.contactInfo=JSON.parse(localStorage.getItem('viewObject')!)
    console.log(this.contactInfo)
  }
}
