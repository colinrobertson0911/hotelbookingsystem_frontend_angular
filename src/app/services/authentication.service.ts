import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Login } from '../models/login';
import { RegistrationForm } from '../models/registration-form';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // not right url but cant change untill back end does
  // login_url = 'http://localhost:8080/authenticate'
  login_url = 'http://localhost:8088/hotelbookingsystem/login/authenticate'
  // login_url = 'http://localhost:8088/hotelbookingsystem/login/LoginUserSubmit/1';
  registration_url = "http://localhost:8088/hotelbookingsystem/register/RegisterUserSubmit/";

  constructor(private _http : HttpClient,
              private _router : Router) { }

  logon(login : Login){

    const headers = new HttpHeaders();
    headers.set('Content-Type', 'Application/json')

    console.log(JSON.stringify(login))
    return this._http.post(this.login_url, login, {headers : headers})
    .subscribe( resp => {
      console.log(resp)
      // localStorage.setItem('token', 'notAGoodToken')
      localStorage.setItem('token', resp['jwt'])
      // this._router.navigate(['/landing'])
    },
    error => console.log(error))
  }

  register_new_user(registrationForm : RegistrationForm){
    return this._http.post<any>(this.registration_url, registrationForm)
    .subscribe(resp => {
      console.log(resp['jwt']),
      // localStorage.setItem('token', 'notAGoodToken')
      localStorage.setItem('token', resp['jwt'])
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
