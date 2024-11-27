import { Component } from '@angular/core';
import { StudentNavbarComponent } from '../student-navbar/student-navbar.component';

@Component({
  selector: 'app-upload-receipt',
  standalone: true,
  imports: [StudentNavbarComponent],
  templateUrl: './upload-receipt.component.html',
  styleUrl: './upload-receipt.component.css'
})
export class UploadReceiptComponent {
  public file: File | null = null; 
  public base64String: string | null = null;
  public storedImg:string | null = null
  public status:string = ''
  public receiptStatus:string = '';
  ngOnInit(){
    let storedCredentials = JSON.parse(localStorage.getItem('userCredentials') || '[]')
    let currentUser = JSON.parse(localStorage.getItem('currentUser') || '[]')
    let userIndex = storedCredentials.findIndex((student:any)=> student.email == currentUser.email)
    // this.email = currentUser.email
    
    if (storedCredentials[userIndex].receipt) {
      
      this.storedImg = storedCredentials[userIndex].receipt
      this.status = "Status"
    }
    if (storedCredentials[userIndex].receiptStatus) {
      
      this.receiptStatus = storedCredentials[userIndex].receiptStatus
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

  uploadReceipt(): void {
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
      storedCredentials[userIndex].receipt = this.base64String
      
      localStorage.setItem('userCredentials', JSON.stringify(storedCredentials));
      this.storedImg = storedCredentials[userIndex].receipt
  
     
    };
  
    reader.onerror = (error) => {
      console.error('Error converting file to Base64:', error);
    };
  
    reader.readAsDataURL(this.file); 
  }
  
}
