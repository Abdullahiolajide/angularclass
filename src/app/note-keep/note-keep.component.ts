import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentNavbarComponent } from '../student-navbar/student-navbar.component';

@Component({
  selector: 'app-note-keep',
  standalone: true,
  imports: [FormsModule, CommonModule, StudentNavbarComponent],
  templateUrl: './note-keep.component.html',
  styleUrl: './note-keep.component.css'
})
export class NoteKeepComponent {
  public title:string = "";
  public content:string = ""
  public editTitleValue:string ="";
  public editContentValue:string ="";
  public indexNumber:number = 0;
  public studentCredentials:(any)[]=[];
  public studentIndex:any = null;
  public noteIndex:any = null;
  constructor(public route:Router){}

  ngOnInit(){
    let studentCredentials = JSON.parse(localStorage.getItem('userCredentials') || '[]')
    let currentStudent = JSON.parse(localStorage.getItem('currentUser') || '[]')
    let studentIndex = studentCredentials.findIndex((student:any)=> student.email == currentStudent.email)
    this.studentIndex = studentIndex
    this.studentCredentials = studentCredentials;
  }

  addNote(){
    
    if (this.title == '') {
      alert("Input field Cannot be Empty")
    }else{

    let storedStudentNotes = this.studentCredentials[this.studentIndex].studentNotes 
    if (storedStudentNotes) {
      
      this.studentCredentials[this.studentIndex].studentNotes  = [...storedStudentNotes, {title:this.title, content:this.content}]
    }else{
      this.studentCredentials[this.studentIndex].studentNotes  = [{title:this.title, content:this.content}]
    }
    localStorage.setItem('userCredentials', JSON.stringify(this.studentCredentials))
    }
  }
  routeToView(i:number){
    this.route.navigate(['userDashboard/notekeep/' + i])
    let selectedNoteArray = localStorage.setItem('selectedStudentNote', JSON.stringify(this.studentCredentials[this.studentIndex].studentNotes[i]))
  }
  edit(i:number){
    this.noteIndex = i
    this.editTitleValue = this.studentCredentials[this.studentIndex].studentNotes[i].title
    this.editContentValue = this.studentCredentials[this.studentIndex].studentNotes[i].content

  }
  saveEdit(){
    let i = this.noteIndex
    this.studentCredentials[this.studentIndex].studentNotes[i].title = this.editTitleValue
    this.studentCredentials[this.studentIndex].studentNotes[i].content = this.editContentValue
    localStorage.setItem('userCredentials', JSON.stringify(this.studentCredentials))
  }
  del(i:number){
    this.studentCredentials[this.studentIndex].studentNotes.splice(i, 1)
    localStorage.setItem('userCredentials', JSON.stringify(this.studentCredentials))
  }
}
