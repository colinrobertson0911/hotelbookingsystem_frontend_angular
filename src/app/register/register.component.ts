import { Component, OnInit } from '@angular/core';
import { RegistrationForm } from '../models/registration-form';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm = new RegistrationForm('', '', '');

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit(userForm:NgForm){
    console.log(this.registrationForm)
    console.log(JSON.stringify(userForm.value))

  }

}
