import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from '../models/user';

@Injectable({
    providedIn: 'root'
  })

  export class ReviewService {

    private submitReview = `http://localhost:8088/hotelbookingsystem/review/ReviewSubmit`;
    private bookingByID = 'http://localhost:8088/hotelbookingsystem/booking/BookingConfirmation/';



    constructor(private http: HttpClient) { }

    submitReviewRequest(reviewRequest): Observable<any>{
       return this.http.post(this.submitReview, reviewRequest);
    }

    getBookingById(id: string): Observable<any>{
      return this.http.get(this.bookingByID + id);
    }
  }

