import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from 'src/app/models/hotel';

@Component({
  selector: 'app-hotel-single',
  templateUrl: './hotel-single.component.html',
  styleUrls: ['./hotel-single.component.css']
})
export class HotelSingleComponent implements OnInit {

  @Input() hotel : Hotel;

  selectedHotel : Hotel[];
  

  constructor(private _http : HttpClient) { }


  ngOnInit(): void {

    let backend_url = `http://localhost:8088/hotelbookingsystem/hotel/SeeHotel/${selectedHotel.hotelId}`;
    let resp = this._http.get(backend_url);
    resp.subscribe(result => this.selectedHotel = result as Hotel[],
                  error => console.log("selected hotel call FAILED ", error))
  }
}