import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LogonService {

  login_url = 'http://localhost:3000/login';

  constructor(private _http : HttpClient) { }

  logon(login : Login){
    return this._http.post<any>(this.login_url, login);
  }
}
