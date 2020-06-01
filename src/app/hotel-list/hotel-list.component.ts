import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    // resp.subscribe(result => this.hotels = result as Hotel[])

    this.hotels = [{"Name": "data", "otherData": "stuff"},
                    {"Name":"the ritz", "otherData": "stuff"},
                    {"Name":"the  balmoral", "otherData": "stuff"},
                    {"Name":"the savoy", "otherData": "stuff"}
  ]

}

}
