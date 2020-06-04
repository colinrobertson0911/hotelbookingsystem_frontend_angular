import { Component, OnInit, Input, OnChanges, SimpleChanges, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDatepicker } from '@angular/material/datepicker';
import { Bookings } from '../models/bookings'
import { HotelSingleComponent } from '../hotel-single/hotel-single.component'

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})

@Injectable()
export class BookingsComponent implements OnInit {
  
  startDate = new Date();
  endDate = new Date();
  
  @Input() booking : Bookings;

  @Input() selectedHotel : HotelSingleComponent["selectedHotel"];

  constructor(private _http: HttpClient) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedHotel']) {
      this.selectedHotel = HotelSingleComponent["selectedHotel"];
    }

}

  ngOnInit(): void {
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
    this.booking.checkInDate = startDate.toString();
    this.booking.checkOutDate = endDate.toString();

    let submitBooking = `http://localhost:8088/hotelbookingsystem/hotel/BookingSubmit`;
    let submitBookingResp = this._http.get(submitBooking);
    submitBookingResp.subscribe(bookingResult => (this.selectedHotel = bookingResult as HotelSingleComponent["selectedHotel"], 
                                                              console.log("result : ",bookingResult)),
                                   error => console.log("error with room type GET request,", error))

  }

}
