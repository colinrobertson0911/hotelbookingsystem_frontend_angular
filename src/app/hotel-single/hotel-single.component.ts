import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from 'src/app/models/hotel';
import { StateService } from '../services/state.service';
// import { LocalStorageService } from './services/localStorage.service';

@Component({
  selector: 'app-hotel-single',
  templateUrl: './hotel-single.component.html',
  styleUrls: ['./hotel-single.component.css']
})
export class HotelSingleComponent implements OnInit, OnDestroy {

  // @Input() hotel : Hotel;

  selectedHotel : Hotel[];
  hotel : Hotel;

  constructor(private _http : HttpClient,
              private stateService : StateService) { }


  ngOnInit(): void {
    this.hotel = this.stateService.data;
    let backend_url = `http://localhost:8088/hotelbookingsystem/hotel/SeeHotel/${this.hotel.hotelId}`;
    let resp = this._http.get(backend_url);
    resp.subscribe(result => this.selectedHotel = result as Hotel[],
                  error => console.log("selected hotel call FAILED ", error))            
    console.log("AAAAAAAAAAAAAAA",this.stateService.data)
    if ( (this.stateService.data === undefined) &&
         (!!localStorage.getItem(`hotel-item-${localStorage.getItem('id-for-refresh')}`)))
    {
        this.hotel = JSON.parse(localStorage.getItem(`hotel-item-${localStorage.getItem('id-for-refresh')}`));
        console.log(this.hotel)
        console.log(typeof(this.hotel))
      
    } else {
      this.hotel = this.stateService.data;
    }
    localStorage.setItem('id-for-refresh', String(this.hotel.hotelId))
    localStorage.setItem(`hotel-item-${this.hotel.hotelId}`, JSON.stringify(this.hotel))
    // let backend_url = `http://localhost:8088/hotelbookingsystem/hotel/SeeHotel/${this.hotel.hotelId}`;
    // let resp = this._http.get(backend_url);
    // resp.subscribe(result => this.selectedHotel = result as Hotel[],
    //               error => console.log("selected hotel call FAILED ", error))
  }

  ngOnDestroy(): void {
    localStorage.setItem(`hotel-item-${this.hotel.hotelId}`, JSON.stringify(this.hotel))
  }
}