import { Component, OnInit, DoCheck} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from 'src/app/models/hotel';
import { StateService } from '../services/state.service';
import { Router } from '@angular/router';
// import { LocalStorageService } from './services/localStorage.service';

@Component({
  selector: 'app-hotel-single',
  templateUrl: './hotel-single.component.html',
  styleUrls: ['./hotel-single.component.css']
})
export class HotelSingleComponent implements OnInit, DoCheck {


  selectedHotel : Hotel[];
  hotel : Hotel;

  constructor(private _http : HttpClient,
              private stateService : StateService,
              private _router : Router) { }


  ngOnInit(): void {
    if (!!this.stateService.data){
      this.hotel = this.stateService.data;
    }
    else if (!!localStorage.getItem(this._router.url)){
      this.hotel = JSON.parse(localStorage.getItem(this._router.url));
    }
    else {
    const backend_url = `http://localhost:8088/hotelbookingsystem/hotel/SeeHotel/${this._router.url.substr(-1)}`;
    this._http.get(backend_url)
      .subscribe(result => (this.hotel = result as Hotel),
                error => console.log("selected hotel call FAILED ", error))
    }
  }

  ngDoCheck(){
    localStorage.setItem(this._router.url, JSON.stringify(this.hotel))
  }

}