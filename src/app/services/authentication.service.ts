import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Login } from '../models/login';
import { RegistrationForm } from '../models/registration-form';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  loginUrl = 'http://localhost:8088/hotelbookingsystem/login/authenticate';
  registrationUrl = 'http://localhost:8088/hotelbookingsystem/login/RegisterUserSubmit/';
  return = '';
  user: User;
  userFromStorage: User;


  constructor(private _http : HttpClient, private _router : Router, private _route: ActivatedRoute) {
    this._route.queryParams.subscribe(params => this.return = params['return'] || '/landing');
    this.userFromStorage = JSON.parse(localStorage.getItem('user'));
    if (this.userFromStorage){
      this.user = this.userFromStorage;
    } else {
      this.user = new User();
    }
  }


  logon(login: Login){

    const headers = new HttpHeaders();
    headers.set('Content-Type', 'Application/json');

    console.log(JSON.stringify(login));
    return this._http.post<User>(this.loginUrl, login, {headers : headers})
    .subscribe( resp => {
      console.log(resp);
      localStorage.setItem('token', JSON.stringify(resp.token));
      localStorage.setItem('username', JSON.stringify(resp.username));
      localStorage.setItem('user', JSON.stringify(resp));
      this.user = resp;
      console.log(this.user);
      this._router.navigateByUrl(this.return);
    },
    error => console.log(error));
  }

  register_new_user(registrationForm : RegistrationForm){
    return this._http.post<any>(this.registrationUrl, registrationForm)
    .subscribe(resp => {
      console.log(resp['jwt']),
      localStorage.setItem('token', resp['jwt']);
      this._router.navigate(['/landing']);
    },
    error => console.log(error));
    }

    loggedOn(){
      return !!localStorage.getItem('token');;
    }

    logout(){
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      localStorage.removeItem('user');
      this.user = new User();
      this._router.navigate['/landing'];
    }

    getToken(){
      return localStorage.getItem('token');
    }



}
