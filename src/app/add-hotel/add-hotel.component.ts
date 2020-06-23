import { Component, OnInit } from '@angular/core';
import { HotelService } from '../services/hotel.service';
import { Router } from '@angular/router';
import { Room } from '../models/room';
import { Hotel } from '../models/hotel';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {

  rooms: Room[];
  addHotelForm = new Hotel();

  constructor(private hotelService: HotelService,
              private router: Router) { }


  ngOnInit(): void {
    this.hotelService.getAllRooms().subscribe(data => {
      this.rooms = data as Room[];
    });
  }

  addHotel() {
    this.addHotelForm.numOfRooms = this.addHotelForm.room.length;
    this.hotelService.addHotelSubmit(this.addHotelForm).subscribe( data => {
      if (data){
        this.router.navigate(['/hotel-list']);
      }
    });
  }
}
