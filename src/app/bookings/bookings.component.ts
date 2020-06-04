import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  
  
  startDate = new Date(2000, 0, 2);
  constructor() { }

  ngOnInit(): void {
  }

  inputStartDate(event){
    console.log(event.value);
  }
  changeStartDate(event){
    console.log(event.value);
  }

  inputEndDate(event){
    console.log(event.value);
  }
  changeEndDate(event){
    console.log(event.value);
  }

}
