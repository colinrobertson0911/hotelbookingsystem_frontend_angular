import { Injectable,  Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector: Injector) { }

  intercept(req, next){
    let auth = this.injector.get(AuthenticationService)
    let tokenisedReq = req.clone({
      setHeaders : {
        Authorization: `Bearer ${auth.getToken()}`
      }
    })
    return next.handle(tokenisedReq)
  }
}
