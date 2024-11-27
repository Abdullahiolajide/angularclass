import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-note-app',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './note-app.component.html',
  styleUrl: './note-app.component.css'
})
export class NoteAppComponent {
  formOne:FormGroup;

  constructor(public builder:FormBuilder, public route:Router){
    this.formOne=this.builder.group({
      title:'',
      content:'',
    })
  }
  public editTitleValue:string ="";
  public editContentValue:string ="";
  public indexNumber:number = 0;
  public noteArray:(any)[]=[];

  ngOnInit(){
    let storedNote = JSON.parse(localStorage.getItem('noteArray') || '[]')
    this.noteArray = storedNote;
  }


  addNote(){
    if (this.formOne.value.title == '') {
      alert("Input field Cannot be Empty")
    }else{

    this.noteArray.push(this.formOne.value)
    localStorage.setItem('noteArray', JSON.stringify(this.noteArray))
    this.formOne.setValue({title:'', content:''})
    }
  }

  del(i:number){
    this.noteArray.splice(i, 1)
    localStorage.setItem('noteArray', JSON.stringify(this.noteArray))

  }
  edit(i:number){
    this.indexNumber = i;
    this.editTitleValue = this.noteArray[i].title;
    this.editContentValue = this.noteArray[i].content;

  }
  saveEdit(){
    this.noteArray[this.indexNumber].title = this.editTitleValue;
    this.noteArray[this.indexNumber].content = this.editContentValue;
    localStorage.setItem('noteArray', JSON.stringify(this.noteArray))
    
  }

  routeToView(i:number){
    this.route.navigate(['/note/' + i])
    let selectedNoteArray = localStorage.setItem('selectedNoteArray', JSON.stringify(this.noteArray[i]))
  }
}
