import { Component, OnInit } from '@angular/core';
import { Review } from '../models/review';
import { HotelService } from '../services/hotel.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

  reviews: Review[];

  constructor(private hotelService: HotelService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.hotelService.getAllReviews(id).subscribe(data => {
      this.reviews = data as Review[];
    })
  }

}
