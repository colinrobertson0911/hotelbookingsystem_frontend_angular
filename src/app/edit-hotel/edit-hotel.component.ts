import { Component, OnInit } from '@angular/core';
import { HotelService } from '../services/hotel.service';
import { Router } from '@angular/router';
import { Room } from '../models/room';
import { Hotel } from '../models/hotel';

@Component({
  selector: 'app-edit-hotel',
  templateUrl: './edit-hotel.component.html',
  styleUrls: ['./edit-hotel.component.css']

})
export class EditHotelComponent implements OnInit {

  rooms: Room[];
  editHotelForm = new Hotel();


  constructor(private hotelService: HotelService,
    private router: Router) { }

  ngOnInit(): void {
    this.hotelService.getAllRooms().subscribe(data => {
      this.rooms = data as Room[];
    });

  }

  editHotel() {
    this.hotelService.editHotelSubmit(this.editHotelForm).subscribe(data => {
      if (data) {
        this.router.navigate(['/hotel-list']);
      }
    });
  }
}