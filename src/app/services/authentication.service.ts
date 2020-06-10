import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Login } from '../models/login';
import { RegistrationForm } from '../models/registration-form';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  
  login_url = 'http://localhost:8088/hotelbookingsystem/login/authenticate'
  registration_url = "http://localhost:8088/hotelbookingsystem/register/RegisterUserSubmit/";
  return = '';

  constructor(private _http : HttpClient,
              private _router : Router,
              private _route: ActivatedRoute) 
              { 
              console.log("DDDDDDDDDDDDDd",this._router.routerState)
              this._route.queryParams
              .subscribe(params => this.return = params['return'] || '/landing');
              }


  logon(login : Login){

    const headers = new HttpHeaders();
    headers.set('Content-Type', 'Application/json')

    console.log(JSON.stringify(login))
    return this._http.post(this.login_url, login, {headers : headers})
    .subscribe( resp => {
      console.log(resp)
      // localStorage.setItem('token', 'notAGoodToken')
      localStorage.setItem('token', resp['jwt'])
      this._router.navigateByUrl(this.return)
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
