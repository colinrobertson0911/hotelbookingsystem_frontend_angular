import { Component, OnInit, Input } from '@angular/core';

import {AuthenticationService} from '../services/authentication.service';



@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService) { }

  ngOnInit(): void {

  }

}
