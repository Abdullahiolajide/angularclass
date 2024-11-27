import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StudentNavbarComponent } from '../student-navbar/student-navbar.component';

@Component({
  selector: 'app-view-note-keep',
  standalone: true,
  imports: [CommonModule, RouterLink, StudentNavbarComponent],
  templateUrl: './view-note-keep.component.html',
  styleUrl: './view-note-keep.component.css'
})
export class ViewNoteKeepComponent {
  public displayArray:(any)[] = []
  ngOnInit(){
    let selectedStudentNote = JSON.parse(localStorage.getItem('selectedStudentNote') || '[]')
    // console.log(selectedNoteArray);
    this.displayArray = [selectedStudentNote];
    // console.log(this.displayArray)
  }
}
