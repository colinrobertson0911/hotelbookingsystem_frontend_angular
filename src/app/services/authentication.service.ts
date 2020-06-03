import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Login } from '../models/login';
import { RegistrationForm } from '../models/registration-form';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  login_url = 'http://localhost:8088/hotelbookingsystem/login/LoginUserSubmit/1';
  registration_url = "http://localhost:8088/hotelbookingsystem/register/RegisterUserSubmit/";

  constructor(private _http : HttpClient,
              private _router : Router) { }

  logon(login : Login){
    // return this._http.post<any>(this.login_url, login)

    // #ToDo: back end needs changing to POST and accept user login object
    // and return a token

    return this._http.get(this.login_url)
    .subscribe( resp => {
      console.log(resp)
      localStorage.setItem('token', 'notAGoodToken')
      // localStorage.setItem('token', resp.token)
      this._router.navigate(['/landing'])
    },
    error => console.log(error))
  }

  register_new_user(registrationForm : RegistrationForm){
    return this._http.post<any>(this.registration_url, registrationForm)
    .subscribe(resp => {
      console.log(resp),
      localStorage.setItem('token', 'notAGoodToken')
      // localStorage.setItem('token', resp.token)
      this._router.navigate(['/landing'])
    },
    error => console.log(error))
    }

    loggedOn(){
      return !!localStorage.getItem('token')
    }

    logout(){
      localStorage.removeItem('token')
      this._router.navigate['/landing']
    }

    getToken(){
      return localStorage.getItem('token')
    }



}
