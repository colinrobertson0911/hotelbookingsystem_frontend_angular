import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from 'src/app/models/hotel';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-hotel-single',
  templateUrl: './hotel-single.component.html',
  styleUrls: ['./hotel-single.component.css']
})
export class HotelSingleComponent implements OnInit {

  // @Input() hotel : Hotel;

  selectedHotel : Hotel[];
  hotel;

  constructor(private _http : HttpClient,
              private stateService : StateService) { }


  ngOnInit(): void {
    this.hotel = this.stateService.data;
    let backend_url = `http://localhost:8088/hotelbookingsystem/hotel/SeeHotel/${this.hotel.hotelId}`;
    let resp = this._http.get(backend_url);
    resp.subscribe(result => this.selectedHotel = result as Hotel[],
                  error => console.log("selected hotel call FAILED ", error))
  }
}