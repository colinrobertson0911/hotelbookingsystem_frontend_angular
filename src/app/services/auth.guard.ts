import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { AuthenticationService } from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private _authService : AuthenticationService,
              private _router : Router) {}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {
    if (this._authService.loggedOn()){
      return true;
    } else {
      this._router.navigate(['/login'], {
        queryParams: {
          return: state.url
        }
      })
      return false
    }
  }
    
  }
  

