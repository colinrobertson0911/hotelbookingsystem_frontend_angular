import { Component, OnInit } from '@angular/core';
import { RegistrationForm } from '../models/registration-form';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm = new RegistrationForm('uname', 'email', 'password');

  constructor() { }

  ngOnInit(): void {

  }

}
