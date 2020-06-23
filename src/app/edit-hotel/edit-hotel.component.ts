import { Component, OnInit } from '@angular/core';
import { HotelService } from '../services/hotel.service';
import {ActivatedRoute, Router} from '@angular/router';
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
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const hotelId = this.route.snapshot.paramMap.get('id');
    this.hotelService.getAllRooms().subscribe(data => {
      this.rooms = data as Room[];
    });
    this.hotelService.getHotelById(hotelId).subscribe(data => {
      this.editHotelForm = data as Hotel;
    });
  }

  editHotel() {
    this.editHotelForm.numOfRooms = this.editHotelForm.room.length;
    this.hotelService.editHotelSubmit(this.editHotelForm).subscribe(data => {
      this.router.navigate(['/account']);
    });
  }
}
