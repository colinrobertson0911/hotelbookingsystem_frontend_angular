import { Component, OnInit, Input, OnChanges, SimpleChanges, Injectable, NgModule, DoCheck } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDatepicker } from '@angular/material/datepicker';
import { Bookings } from '../models/bookings'
import { HotelSingleComponent } from '../hotel-single/hotel-single.component'
import { Hotel } from '../models/hotel';
import { StateService } from '../services/state.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})

@Injectable()
export class BookingsComponent implements OnInit, DoCheck {

  private submitBooking = `http://localhost:8088/hotelbookingsystem/hotel/BookingSubmit`;
    
  
  startDate = new Date();
  endDate = new Date();
  hotel : Hotel;
  

  constructor(private _http: HttpClient,
              private _state: StateService,
              private _router: Router) { }

  

  ngOnInit(): void {

    if (!!this._state.data){
      this.hotel = this._state.data as Hotel;
    } else if (!!sessionStorage.getItem('current-hotel-booking')){
      this.hotel = JSON.parse(sessionStorage.getItem('current-hotel-booking')) as Hotel;
    } else {
      // needs a better solution, maybe drop down menu at top to pick hotel instead of passing 
      // data through storage and stateService
      this._router.navigate(['/landing'])
    }
  }

  ngDoCheck(){
    sessionStorage.setItem("current-hotel-booking", JSON.stringify(this.hotel));
  }

  inputStartDate(event){
    console.log(event.value);
    this.startDate = event.target.value;
  }
  changeStartDate(event){
    console.log(event.value);
    this.startDate = event.target.value;
  }

  inputEndDate(event){
    console.log(event.value);
    this.endDate = event.target.value;
  }
  changeEndDate(event){
    console.log(event.value);
    this.endDate = event.target.value;
  }

  createAndSubmitBooking(startDate, endDate) {
    // this.booking.checkInDate = startDate.toString();
    // this.booking.checkOutDate = endDate.toString();

    // var submitBookingResp = this._http.get(this.submitBooking);
    // submitBookingResp.subscribe(bookingResult => (this.selectedHotel = bookingResult as HotelSingleComponent["selectedHotel"], 
    //                                                           console.log("result : ",bookingResult)),
    //                                error => console.log("error with room type GET request,", error))

  }

}
