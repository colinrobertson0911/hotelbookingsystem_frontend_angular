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
  private allHotels = 'http://localhost:8088/hotelbookingsystem/admin/AllHotels/';
  private hotelByID = 'http://localhost:8088/hotelbookingsystem/hotel/SeeHotelById/';
  private allRoomTypes = 'http://localhost:8088/hotelbookingsystem/hotel/AllRooms/';

  constructor(private http: HttpClient) { }

  getAllHotels(): Observable<any>{
    return this.http.get(this.allHotels);
  }

  getAllRooms(): Observable<any>{
    return this.http.get(this.allRoomTypes);
  }

  getHotelById(id: string): Observable<any>{
    return this.http.get(this.hotelByID + id);
  }

  addHotelSubmit(hotelForm): Observable<any> {
    return this.http.post(this.submitHotel, hotelForm);
  }
  editHotelSubmit(hotelForm, username): Observable<any> {
    return this.http.post(this.editHotel + username, hotelForm);
  }

  getHotelOwnerDetails(username: string): Observable<any>{
     return this.http.get(this.hotelOwnerDetails + username);
  }

}
