import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-note-content',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './view-note-content.component.html',
  styleUrl: './view-note-content.component.css'
})
export class ViewNoteContentComponent {
  public displayArray:(any)[] = []
  ngOnInit(){
    let selectedNoteArray = JSON.parse(localStorage.getItem('selectedNoteArray') || '[]')
    // console.log(selectedNoteArray);
    this.displayArray = [selectedNoteArray];
    // console.log(this.displayArray)
  }
}
