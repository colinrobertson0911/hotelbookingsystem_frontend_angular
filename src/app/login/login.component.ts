import {Component, OnInit} from '@angular/core';
import {Login} from '../models/login';
import {NgForm} from '@angular/forms';
import {AuthenticationService} from '../services/authentication.service';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = new Login('', '');
  userLogin;
  return = '';

  constructor(private auth: AuthenticationService, private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => this.return = params.return || '/');
  }

  onSubmit(loginForm: NgForm) {
    this.userLogin = new Login(loginForm.value.username, loginForm.value.password);
    this.auth.logon(this.userLogin);
    this.router.navigate([this.return]).catch(error => console.error(error));
  }

}
