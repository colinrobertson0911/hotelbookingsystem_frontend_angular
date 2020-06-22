import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Hotel} from '../models/hotel';
import {HotelService} from '../services/hotel.service';


@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  hotels: Hotel[];

  constructor(private http: HttpClient, private hotelService: HotelService) {}

  ngOnInit(): void {
    this.hotelService.getAllHotels().subscribe(data => {
      this.hotels = data as Hotel[];
    });
  }

}
