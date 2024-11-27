import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentNavbarComponent } from '../student-navbar/student-navbar.component';

@Component({
  selector: 'app-upload-pfp',
  standalone: true,
  imports: [FormsModule, StudentNavbarComponent],
  templateUrl: './upload-pfp.component.html',
  styleUrl: './upload-pfp.component.css'
})

export class UploadPfpComponent {
  // public storedCredentials:any[]= [];
  public email:String = '';
  public file: File | null = null; 
  public base64String: string | null = null;
  public storedImg:string | null = null

  ngOnInit(){
    let storedCredentials = JSON.parse(localStorage.getItem('userCredentials') || '[]')
    let currentUser = JSON.parse(localStorage.getItem('currentUser') || '[]')
    console.log(currentUser.email)
    let userIndex = storedCredentials.findIndex((student:any)=> student.email == currentUser.email)
    console.log(userIndex)
    // this.email = currentUser.email
    if (storedCredentials[userIndex].profilePicture) {
      
      this.storedImg = storedCredentials[userIndex].profilePicture
    }
  }

fileSelect(event: any){
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    this.file = input.files[0];
    console.log('Selected File:', this.file);
  } else {
    console.error('No file selected.');
  }
}

uploadPfp(): void {
  let storedCredentials = JSON.parse(localStorage.getItem('userCredentials') || '[]')
  let currentUser = JSON.parse(localStorage.getItem('currentUser') || '[]')
  let userIndex = storedCredentials.findIndex((student:any)=> student.email == currentUser.email)
  console.log(userIndex)
  if (!this.file) {
    console.error('No file selected to upload.');
    return;
  }

  const reader = new FileReader();

  reader.onload = ()=> {
    this.base64String = reader.result as string;
    storedCredentials[userIndex].profilePicture = this.base64String
    
    localStorage.setItem('userCredentials', JSON.stringify(storedCredentials));
    this.storedImg = storedCredentials[userIndex].profilePicture

   
  };

  reader.onerror = (error) => {
    console.error('Error converting file to Base64:', error);
  };

  reader.readAsDataURL(this.file); 
}

}
