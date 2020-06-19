import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router';
import {Login} from '../models/login';
import {RegistrationForm} from '../models/registration-form';
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
  roles: string[] = [];

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => this.return = params.return || '');
    this.userFromStorage = JSON.parse(localStorage.getItem('user'));
    this.roles = JSON.parse(localStorage.getItem('roles'));
    if (!this.roles){
      this.roles = [];
    }
    if (this.userFromStorage) {
      this.user = this.userFromStorage;
    } else {
      this.user = new User();
    }
  }

  hasRole(role: string): boolean{
    role = role.toUpperCase();
    for (const roleName of this.roles){
      if (role === roleName){
        return true;
      }
    }
    return false;
  }

  logon(login: Login) {
    return this.http.post<User>(this.loginUrl, login)
      .subscribe(resp => {
          localStorage.setItem('token', resp.token);
          localStorage.setItem('username', resp.username);
          localStorage.setItem('user', JSON.stringify(resp));
          this.user = resp;
          // TODO: Loop through all roles once backend is capable.
          this.roles.push(resp.role);
          localStorage.setItem('roles', JSON.stringify(this.roles));
          this.router.navigate([this.return]).catch(error => console.error(error));
        },
        error => console.log(error));
  }

  register_new_user(registrationForm: RegistrationForm) {
    return this.http.post<any>(this.registrationUrl, registrationForm)
      .subscribe(data => {
          if (data) {
            this.router.navigate(['/login']).catch(error => console.error(error));
          }
        },
        error => console.log(error));
  }

  loggedOn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('user');
    localStorage.removeItem('roles');
    this.user = new User();
    this.roles = [];
    this.router.navigate(['/']).catch(
      error => console.error(error)
    );
  }

  getToken() {
    return localStorage.getItem('token');
  }


}
