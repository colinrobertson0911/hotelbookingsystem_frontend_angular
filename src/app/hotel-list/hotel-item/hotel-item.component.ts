import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
import { StateService } from 'src/app/services/state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-item',
  templateUrl: './hotel-item.component.html',
  styleUrls: ['./hotel-item.component.css']
})

export class HotelItemComponent implements OnInit {

  @Input() hotel : Hotel;

  constructor(private stateService : StateService,
              private router : Router) { }

  ngOnInit(): void {
  }

  onClickToPage(id){
    this.stateService.data = this.hotel as Hotel;
    this.router.navigate([`/hotel-single/${id}`])
  }


}
