import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private submitHotel = `http://localhost:8088/hotelbookingsystem/hotelOwner/AddHotelSubmit`;
  private hotelOwnerDetails = `http://localhost:8088/hotelbookingsystem/admin/SeeHotelOwner/`;
  private editHotel = `http://localhost:8088/hotelbookingsystem/hotelOwner/EditHotelSubmit/`;
  
  constructor(private http: HttpClient) { }

  addHotelSubmit(hotelForm): Observable<any> {
    
    return this.http.post(this.submitHotel, hotelForm)

  }
  editHotelSubmit (hotelForm): Observable<any> {
    
    return this.http.post(this.editHotel, hotelForm)
  }

  getHotelOwnerDetails(username: string): Observable<any>{

     return this.http.get(this.hotelOwnerDetails + username);
  }

}
