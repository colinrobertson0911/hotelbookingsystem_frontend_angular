import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from '../models/hotel';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  // hotels = hotels[]
  hotels = []

  constructor(private _http : HttpClient) { }


  ngOnInit(): void {

    // let backend_url = "link to backend url for hotels list";
    // let resp = this._http.get(backend_url);
    // resp.subscribe(result => this.hotels = result as Hotel[],
    //               error => console.log("hotel list GET call failed ", error))

    this.hotels = [{"hotelId":2,"hotelName":"Yotel","numOfRooms":50,"address":"some street","postcode":"EH71 7FA","city":"Edinburgh","ammenities":"bowling alley","bookings":[],"starRating":4,"room":[{"roomId":2,"roomType":"LUXURY","price":80.00,"roomTypeAndPrice":"LUXURY 80.00"},{"roomId":3,"roomType":"DELUXE","price":100.00,"roomTypeAndPrice":"DELUXE 100.00"}],"airportTransfers":true,"transferPrice":20,"verified":true},
    {"hotelId":3,"hotelName":"Radisson Blue","numOfRooms":2,"address":"123 argyle street","postcode":"G3 6OP","city":"Glasgow","ammenities":"Conference Rooms, Bars, Near Central Station","bookings":[{"bookingId":3,"roomType":"STANDARD","hotel":"Radisson Blue","checkInDate":"2020-04-20","checkOutDate":"2020-04-30","roomPrice":60.00,"extrasPrice":0.00,"totalPrice":540.00,"extras":"NO_EXTRAS","checkInDateFormatted":"20/04/2020","checkOutDateFormatted":"30/04/2020"},{"bookingId":4,"roomType":"STANDARD","hotel":"Radisson Blue","checkInDate":"2020-04-20","checkOutDate":"2020-04-30","roomPrice":60.00,"extrasPrice":0.00,"totalPrice":540.00,"extras":"NO_EXTRAS","checkInDateFormatted":"20/04/2020","checkOutDateFormatted":"30/04/2020"}],"starRating":4,"room":[{"roomId":1,"roomType":"STANDARD","price":60.00,"roomTypeAndPrice":"STANDARD 60.00"}],"airportTransfers":false,"transferPrice":20,"verified":true},
    {"hotelId":4,"hotelName":"Radisson Red","numOfRooms":43,"address":"456 argyle street","postcode":"G3 6RP","city":"Glasgow","ammenities":"Conference Rooms, Bars, Near Central Station","bookings":[],"starRating":4,"room":[{"roomId":1,"roomType":"STANDARD","price":60.00,"roomTypeAndPrice":"STANDARD 60.00"}],"airportTransfers":false,"transferPrice":20,"verified":false},
    {"hotelId":1,"hotelName":"Travelodge Glasgow","numOfRooms":5,"address":"1 main street","postcode":"g43 6pq","city":"Glasgow","ammenities":"none","bookings":[],"starRating":3,"room":[],"airportTransfers":true,"transferPrice":20,"verified":true}
  ]

}

}
