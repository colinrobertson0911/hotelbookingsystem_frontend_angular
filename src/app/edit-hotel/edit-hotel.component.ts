import { Component, OnInit } from '@angular/core';
import { HotelForm } from '../models/hotel-form';
import { NgForm } from '@angular/forms';
import { HotelService } from '../services/hotel.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-hotel',
  templateUrl: './edit-hotel.component.html',
  styleUrls: ['./edit-hotel.component.css']

})
export class EditHotelComponent implements OnInit {

editHotelForm = new HotelForm('', '', '','', '');
hotel : HotelForm;
hotelSubmission;


  constructor(private hotelService : HotelService,
              private router: Router,
              private http: HttpClient,
              public authenticationService: AuthenticationService) { }

  ngOnInit(): void {

  }
  editHotel(): void {

  }
}
