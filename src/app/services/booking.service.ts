import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private submitBooking = `http://localhost:8088/hotelbookingsystem/booking/BookingSubmit`;

  constructor(private http: HttpClient) { }

  submitBookingRequest(bookingRequest): Observable<any>{
     return this.http.post(this.submitBooking, bookingRequest);
  }

}
