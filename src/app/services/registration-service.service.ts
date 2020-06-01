import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistrationForm } from '../models/registration-form';

@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {

  registration_url = "http://localhost:3000/register";

  constructor(private _http : HttpClient) {}
  
  register_new_user(registrationForm : RegistrationForm){
    return this._http.post<any>(this.registration_url, registrationForm)
    }
}
