import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from 'src/app/models/hotel';
import { Room } from 'src/app/models/room';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styles: ['div { padding: 10px; }']
})
export class LandingComponent implements OnInit {

  @Input() hotel : Hotel[];
  @Input() room : Room[];
  @Input() foundHotel : Hotel[];

  hotels : Hotel[];
  foundHotels : Hotel[];
  numberOfHotels =  Hotel.length;
  searchedQuery = '';

  constructor(private _http : HttpClient) { }

  ngOnInit(): void {

    let allHotels = "http://localhost:8088/hotelbookingsystem/admin/AllHotels/";
    let allHotelsResp = this._http.get(allHotels);
    allHotelsResp.subscribe(allHotelsResult => this.hotels = allHotelsResult as Hotel[],
                  error => console.log("hotel list GET call failed ", error))

}

  saveQuery(event: any) {
    this.searchedQuery = event.target.value;
  }

  searchHotels(searchedQuery) {


      this.foundHotels = this.hotels.filter(hotel => hotel.city.toLowerCase() === searchedQuery.toLowerCase());

      if (this.foundHotels.length == 0) {

        this.foundHotels = this.hotels.filter(hotel => hotel.hotelName.toLowerCase() === searchedQuery.toLowerCase());

    // } else {

    //   let searchByRoomType = `http://localhost:8088/hotelbookingsystem/hotel/SearchByRoomType/${searchedQuery}`;
    //   searchByRoomTypeResp = this._http.get(searchByRoomType);
    //   searchByRoomTypeResp.subscribe(searchByRoomTypeResult => this.hotels = searchByRoomTypeResult as Hotel[],
    //                 error => console.log("Hotels by rooms GET call failed ", error))

    // }

    return this.foundHotels;

  }
}
}
