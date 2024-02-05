import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const studentGuardGuard: CanActivateFn = (route, state) => {
  const routes = inject(Router);
  const user = JSON.parse(localStorage.getItem("CurrentUser")!);

  if(!user){
    routes.navigate(['/signIn'])
    // return false;
  }

  return true;
};
