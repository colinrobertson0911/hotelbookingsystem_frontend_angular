import { Component, OnInit, DoCheck} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from 'src/app/models/hotel';
import { StateService } from '../services/state.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-hotel-single',
  templateUrl: './hotel-single.component.html',
  styleUrls: ['./hotel-single.component.css']
})
export class HotelSingleComponent implements OnInit, DoCheck {

  hotel : Hotel;
  selectedhotel : Hotel

  constructor(private _http : HttpClient,
              private stateService : StateService,
              private _router : Router) { }


  ngOnInit(): void {
    /*regex would be bettter but using it breaks the get request,
    guess it takes too long to run and the string formatter trys to 
    call it before it has time to be set.  
    could look to set a wait function for it
    */

    const re = new RegExp(/\d+/g)
    // re.exec(this._router.url)[0])
    if (!!this.stateService.data){
      this.hotel = this.stateService.data;
    }
    else if (!!sessionStorage.getItem(this._router.url)){
      this.hotel = JSON.parse(sessionStorage.getItem(this._router.url));
    }
    else {
    const backend_url = `http://localhost:8088/hotelbookingsystem/hotel/SeeHotel/${re.exec(this._router.url)[0].toString()}`;
    this._http.get(backend_url)
      .subscribe(result => (this.hotel = result as Hotel),
                error => console.log("selected hotel call FAILED ", error))
    }
  }

  ngDoCheck(){
    sessionStorage.setItem(this._router.url, JSON.stringify(this.hotel))
  }

}