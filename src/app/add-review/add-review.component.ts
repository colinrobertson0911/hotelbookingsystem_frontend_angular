import { Component, OnInit } from '@angular/core';
import { Bookings } from '../models/bookings';
import { BookingService } from '../services/booking.service';

import { ReviewService } from '../services/review.service';
import { HotelService } from '../services/hotel.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Review } from '../models/review';



@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  addReviewForm = new Review();
  currentBooking = new Bookings();

  constructor(private hotelService: HotelService,
    private router: Router,private route: ActivatedRoute, private bookingService: BookingService, private reviewService: ReviewService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('bookingId');

    this.reviewService.getBookingById(id).subscribe( data => {
      this.currentBooking = data as Bookings;
      console.log(this.currentBooking);
      console.log(this.addReviewForm);
    })
  }
  addReview() {
    this.reviewService.submitReviewRequest(this.addReviewForm).subscribe( data => {
      if (data){
        this.router.navigate(['/view-bookings']);
      }
    });
  }

}
