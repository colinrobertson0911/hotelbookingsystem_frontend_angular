import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';

@Component({
  selector: 'app-hotel-single',
  templateUrl: './hotel-single.component.html',
  styleUrls: ['./hotel-single.component.css']
})
export class HotelSingleComponent implements OnInit {

  @Input() hotel : Hotel;

  constructor() { }

  ngOnInit(): void {
  }

}
