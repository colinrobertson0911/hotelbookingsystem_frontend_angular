import {Component, OnInit, NgModule} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Hotel} from '../models/hotel';


@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  hotels: Hotel[];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {

    const backendUrl = 'http://localhost:8088/hotelbookingsystem/admin/AllHotels/';
    const resp = this.http.get(backendUrl);
    resp.subscribe(result => this.hotels = result as Hotel[],
      error => console.log('hotel list GET call failed ', error
      ));
  }

}
