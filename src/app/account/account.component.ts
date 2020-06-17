import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AuthenticationService} from '../services/authentication.service';
import { StateService } from 'src/app/services/state.service';
import { User } from '../models/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() users : User[];

  currentUser : User;

  constructor(public authenticationService: AuthenticationService, private _http : HttpClient,
    private stateService : StateService, private router : Router) { }

  ngOnInit(): void {
    let allUsers = "http://localhost:8088/hotelbookingsystem/admin/AllUsers/";
    let allUsersResp = this._http.get(allUsers);
    allUsersResp.subscribe(allUsersResult => this.users = allUsersResult as User[],
                  error => console.log("user list GET call failed ", error))

  }

  onClickToPage(id){
    this.stateService.data = this.currentUser as User;
    this.router.navigate([`/user/${id}`])
    
    
  }

}
