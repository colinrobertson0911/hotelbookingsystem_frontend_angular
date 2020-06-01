import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';

@Component({
  selector: 'app-hotel-item',
  templateUrl: './hotel-item.component.html',
  styleUrls: ['./hotel-item.component.css']
})
export class HotelItemComponent implements OnInit {

  @Input() hotel : Hotel;

  details = false;
  constructor() { }

  ngOnInit(): void {
  }

  onDetailsClick(){
    this.details = !this.details;
  }

}
