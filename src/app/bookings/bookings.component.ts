import { Component, OnInit, Input, OnChanges, SimpleChanges, Injectable, NgModule, DoCheck } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDatepicker } from '@angular/material/datepicker';
import { Bookings } from '../models/bookings'
import { HotelSingleComponent } from '../hotel-single/hotel-single.component'
import { Hotel } from '../models/hotel';
import { StateService } from '../services/state.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { MatSelect} from '@angular/material/select';
import { BookingRequest } from '../models/booking-request';

export interface RoomType {
    value : string;
    viewValue : string;
}

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})

@Injectable()
export class BookingsComponent implements OnInit, DoCheck {

  private submitBooking = `http://localhost:8088/hotelbookingsystem/booking/BookingSubmit`;
    
  bookingRequest = new BookingRequest();
  
  startDate = new Date();
  endDate = new Date();
  hotel : Hotel;

  roomTypes : RoomType[] = [{value:'STANDARD', viewValue:'standard'},
                            {value: 'LUXURY', viewValue:'luxury'},
                            {value: 'DELUXE', viewValue:'deluxe'},
                            {value: 'SUITE', viewValue:'suite'}]
  roomtypeSelected : string;
  

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
    this.startDate = event.target.value;
    
  }
  changeStartDate(event){
    this.startDate = event.target.value;
  }

  inputEndDate(event){
    this.endDate = event.target.value;
  }
  changeEndDate(event){
    this.endDate = event.target.value;
  }

  createAndSubmitBooking(startDate, endDate) {

    const headers = new HttpHeaders();
    headers.set('Content-Type', 'Application/json')
    
    var splitStartDate = this.startDate.toString().split(' ')
    var splitEndDate = this.endDate.toString().split(' ')

    this.bookingRequest.hotel = this.hotel.hotelName
    this.bookingRequest.checkInDate = this.dateFormatter(splitStartDate[1], splitStartDate[2],splitStartDate[3]).toString()
    this.bookingRequest.checkOutDate = this.dateFormatter(splitEndDate[1], splitEndDate[2],splitEndDate[3]).toString()
    this.bookingRequest.roomType = this.roomtypeSelected
    
    console.log("TESTING", this.bookingRequest)
    const submitBookingRequest = this._http.post(this.submitBooking, this.bookingRequest, {headers : headers})
      .subscribe(resp => console.log("booking created", this.bookingRequest),
                 err => console.log("booking failed ", err));
                  

  }

  dateFormatter(month, day, year){
    var dict = new Map<String, String>()
    dict['Jan'] = '1'
    dict['Feb'] = '2'
    dict['Mar'] = '3'
    dict['Apr'] = '4'
    dict['May'] = '5'
    dict['Jun'] = '6'
    dict['Jul'] = '7'
    dict['Aug'] = '8'
    dict['Sep'] = '9'
    dict['Oct'] = '10'
    dict['Nov'] = '11'
    dict['Dec'] = '12'

    return (day+"/"+dict[month]+"/"+year)
}

}
