import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LogonService } from '../services/logon.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = new Login('', '');
  user_login;

  constructor(private _logonService : LogonService) { }

  ngOnInit(): void {
  }

  onSubmit(loginForm: NgForm){
    console.log(JSON.stringify(loginForm.value))

    // below only works on my (simon's) mock node server
    // this.user_login = new Login(loginForm.value.username, loginForm.value.password);
    // this._logonService.logon(this.user_login)
    // .subscribe( data => console.log("success", data),
    //             error => console.log("error", error))
  }

}
