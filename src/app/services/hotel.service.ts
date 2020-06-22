import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel } from '../models/hotel';
import { Room } from '../models/room';


@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private submitHotel = `http://localhost:8088/hotelbookingsystem/hotelOwner/AddHotelSubmit`;
  private hotelOwnerDetails = `http://localhost:8088/hotelbookingsystem/admin/SeeHotelOwner/`;
  private editHotel = `http://localhost:8088/hotelbookingsystem/hotelOwner/EditHotelSubmit/`;
  private allHotels = 'http://localhost:8088/hotelbookingsystem/admin/AllHotels';
  private hotelByID = 'http://localhost:8088/hotelbookingsystem/hotel/SeeHotelById/';
  private allRoomTypes = 'http://localhost:8088/hotelbookingsystem/hotel/AllRooms/';
  private submitRoom = 'http://localhost:8088/hotelbookingsystem/hotelOwner/AddNewRoomTypeSubmit';

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

  addHotelSubmit(hotelForm: Hotel): Observable<any> {
    return this.http.post(this.submitHotel, hotelForm);
  }
  editHotelSubmit(hotelForm: Hotel): Observable<any> {
    return this.http.put(this.editHotel, hotelForm);
  }

  getHotelOwnerDetails(username: string): Observable<any>{
     return this.http.get(this.hotelOwnerDetails + username);
  }

  addRoomSubmit(roomForm: Room): Observable<any> {
    return this.http.post(this.submitRoom, roomForm)
  }

}
