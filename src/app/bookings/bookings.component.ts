import { Component, OnInit, Input, OnChanges, SimpleChanges, Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDatepicker } from '@angular/material/datepicker';
import { Bookings } from '../models/bookings'
import { HotelSingleComponent } from '../hotel-single/hotel-single.component'
import { Hotel } from '../models/hotel';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})

@Injectable()
export class BookingsComponent implements OnInit {

  private submitBooking = `http://localhost:8088/hotelbookingsystem/hotel/BookingSubmit`;
    
  
  startDate = new Date();
  endDate = new Date();
  
  @Input() booking : Bookings;
  
  // @Input() selectedHotel : HotelSingleComponent["selectedHotel"];

  constructor(private _http: HttpClient) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedHotel']) {
      // this.selectedHotel = HotelSingleComponent["selectedHotel"];
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

    var submitBookingResp = this._http.get(this.submitBooking);
    // submitBookingResp.subscribe(bookingResult => (this.selectedHotel = bookingResult as HotelSingleComponent["selectedHotel"], 
    //                                                           console.log("result : ",bookingResult)),
    //                                error => console.log("error with room type GET request,", error))

  }

}
