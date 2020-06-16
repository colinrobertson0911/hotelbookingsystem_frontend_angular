import { Component, OnInit } from '@angular/core';
import {BookingService} from '../services/booking.service';
import {Bookings} from '../models/bookings';

@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrls: ['./view-bookings.component.css']
})
export class ViewBookingsComponent implements OnInit {

  bookings: Bookings[];

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    // TODO: dynamically fetch data using logged in user's username.
    this.bookingService.getCustomerDetails('customer1').subscribe( data => {
      this.bookings = data.bookings;
    });
  }

}
