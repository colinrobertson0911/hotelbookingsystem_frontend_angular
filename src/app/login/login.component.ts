import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = new Login('', '');
  user_login;
  return = '';
  route: ActivatedRoute;

  constructor(private _auth : AuthenticationService, private _router: Router,
    private _route: ActivatedRoute) {  }

  ngOnInit(): void {
    this._route.queryParams
      .subscribe(params => this.return = params['return'] || '/bookings');
  }

  onSubmit(loginForm: NgForm){
    console.log(JSON.stringify(loginForm.value))

    // below only works on my (simon's) mock node server
    this.user_login = new Login(loginForm.value.username, loginForm.value.password);
    this._auth.logon(this.user_login)
    this._router.navigateByUrl(this.return)

  }

}
