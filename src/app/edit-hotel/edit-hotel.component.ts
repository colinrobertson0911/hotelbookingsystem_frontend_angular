import { Component, OnInit } from '@angular/core';
import { HotelService } from '../services/hotel.service';
import { Router } from '@angular/router';
import { Room } from '../models/room';
import { Hotel } from '../models/hotel';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-edit-hotel',
  templateUrl: './edit-hotel.component.html',
  styleUrls: ['./edit-hotel.component.css']

})
export class EditHotelComponent implements OnInit {

  rooms: Room[];
  editHotelForm = new Hotel();
  hotelOwnerUsername = this.authenticationService.user.username;


  constructor(private hotelService: HotelService,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.hotelService.getAllRooms().subscribe(data => {
      this.rooms = data as Room[];
    });

  }

  editHotel() {
    this.hotelService.editHotelSubmit(this.editHotelForm, this.hotelOwnerUsername).subscribe(data => {
      if (data) {
        this.router.navigate(['/hotel-list']);
      }
    });
  }
}