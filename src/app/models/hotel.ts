import { Bookings } from './bookings';
import { Room } from './room';
import {Review} from './review';

export class Hotel {
    hotelId: number;
    hotelName: string;
    numOfRooms: number;
    address: string;
    postcode: string;
    city: string;
    amenities: string;
    bookings: Bookings[];
    starRating: number;
    room: Room[];
    airportTransfers: boolean;
    transferPrice: number;
    verified: boolean;
    averageHotelScore: number;
    reviews: Review[];

}

