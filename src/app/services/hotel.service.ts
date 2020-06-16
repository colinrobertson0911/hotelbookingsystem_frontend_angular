import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private submitHotel = `http://localhost:8088/hotelbookingsystem/hotelOwner/AddHotelSubmit`;
  
  constructor(private http: HttpClient) { }

  addHotelSubmit(hotelForm): Observable<any> {
    
    return this.http.post(this.submitHotel, hotelForm)

}
}
