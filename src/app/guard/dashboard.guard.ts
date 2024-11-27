import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CredentialsService } from '../services/credentials.service';

export const dashboardGuard: CanActivateFn = (route, state) => {
  
  // const storedCurrentUser = inject(CredentialsService)
  const storedCurrentUser = JSON.parse(localStorage.getItem('currentUser') || "[]");
  const router = inject(Router)
  let checkCurrentUser;

    checkCurrentUser = storedCurrentUser.email
    // console.log(storedCurrentUser.email)
    // console.log(storedCurrentUser.password)
    
  // })
  if (storedCurrentUser.email) {
    console.log(storedCurrentUser.email)
    return true;
    
  }else{
    router.navigate(["/"])
    return false;
   
  }
  
 
};
