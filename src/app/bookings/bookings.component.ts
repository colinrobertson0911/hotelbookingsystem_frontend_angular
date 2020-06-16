import { Component, OnInit, Input, OnChanges, SimpleChanges, Injectable, NgModule, DoCheck } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDatepicker } from '@angular/material/datepicker';
import { Bookings } from '../models/bookings';
import { HotelSingleComponent } from '../hotel-single/hotel-single.component';
import { Hotel } from '../models/hotel';
import { StateService } from '../services/state.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { MatSelect} from '@angular/material/select';
import { BookingRequest } from '../models/booking-request';
import { BookingService } from '../services/booking.service';

export interface RoomType {
    value: string;
    viewValue: string;
}

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})

@Injectable()
export class BookingsComponent implements OnInit, DoCheck {


  bookingRequest = new BookingRequest();

  startDate = new Date();
  endDate = new Date();
  hotel: Hotel;
  checked = false;
  submitted = false;
  response: any;

  roomTypes: RoomType[] = [{value: 'STANDARD', viewValue: 'standard'},
                            {value: 'LUXURY', viewValue: 'luxury'},
                            {value: 'DELUXE', viewValue: 'deluxe'},
                            {value: 'SUITE', viewValue: 'suite'}];
  roomTypeSelected: string;


  constructor(private bookingService: BookingService,
              private http: HttpClient,
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
      this._router.navigate(['/landing']);
    }
  }

  ngDoCheck(){
    sessionStorage.setItem('current-hotel-booking', JSON.stringify(this.hotel));
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

    this.submitted = true;
    const splitStartDate = this.startDate.toString().split(' ');
    const splitEndDate = this.endDate.toString().split(' ');

    this.bookingRequest.hotel = this.hotel.hotelName;
    this.bookingRequest.checkInDate = this.dateFormatter(splitStartDate[1], splitStartDate[2], splitStartDate[3]).toString();
    this.bookingRequest.checkOutDate = this.dateFormatter(splitEndDate[1], splitEndDate[2], splitEndDate[3]).toString();
    this.bookingRequest.roomType = this.roomTypeSelected;
    if (this.checked){
      this.bookingRequest.extras = 'AIRPORTTRANSFER';
    } else {
      this.bookingRequest.extras = 'NO_EXTRAS';
    }
    this.bookingService.submitBookingRequest(this.bookingRequest).subscribe( data => {
      this.response = data;
    });

  }

  dateFormatter(month, day, year){
    const dict = new Map<String, String>();
    dict['Jan'] = '01'
    dict['Feb'] = '02'
    dict['Mar'] = '03'
    dict['Apr'] = '04'
    dict['May'] = '05'
    dict['Jun'] = '06'
    dict['Jul'] = '07'
    dict['Aug'] = '08'
    dict['Sep'] = '09'
    dict['Oct'] = '10'
    dict['Nov'] = '11'


    return (year + '-' + dict[month] + '-' + day);
}

}
