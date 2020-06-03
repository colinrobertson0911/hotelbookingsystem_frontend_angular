import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = new Login('', '');
  user_login;

  constructor(private _auth : AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit(loginForm: NgForm){
    console.log(JSON.stringify(loginForm.value))

    // below only works on my (simon's) mock node server
    this.user_login = new Login(loginForm.value.username, loginForm.value.password);
    this._auth.logon(this.user_login)

  }

}
