import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from 'src/app/models/hotel';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styles: ['div { padding: 10px; }']
})
export class LandingComponent implements OnInit {

  @Input() hotel : Hotel[];
  @Input() foundHotel : Hotel[];

  hotels : Hotel[];
  foundHotels : Hotel[];
  numberOfHotels =  Hotel.length;
  searchedQuery = '';

  constructor(private _http : HttpClient) { }

  ngOnInit(): void {

    let backend_url = "http://localhost:8088/hotelbookingsystem/admin/AllHotels/";
    let resp = this._http.get(backend_url);
    resp.subscribe(result => this.hotels = result as Hotel[],
                  error => console.log("hotel list GET call failed ", error))

}

  saveQuery(event: any) {
    this.searchedQuery = event.target.value;
  }

  searchHotels(searchedQuery) {

      this.foundHotels = this.hotels.filter(hotel => hotel.city.toLowerCase() === searchedQuery.toLowerCase());

      if (this.foundHotels.length == 0) {

        this.foundHotels = this.hotels.filter(hotel => hotel.hotelName.toLowerCase() === searchedQuery.toLowerCase());

      }

      return this.foundHotels;

      }
  }
