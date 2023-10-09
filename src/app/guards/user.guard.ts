import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthServiceService } from '../Services/user-auth-service.service';

export const userGuard: CanActivateFn = (route, state) => {

  const userService = inject(UserAuthServiceService)
  const router = inject(Router)
  if(userService.isUserLoggedIn){
    return true
  }else{
    alert('please login')
    router.navigate(['/logIn'])
    return false
  }

};
