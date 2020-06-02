import { Bookings } from './bookings';
import { Room } from './room';

export class Hotel {
    hotelId : number;
    hotelName : string;
    numOfRooms : number;
    address : string;
    postcode : string;
    city : string;
    ammenities : string;
    bookings : Bookings[];
    starRating : number;
    room : Room[];
    airportTransfers : boolean;
    transferProce : number;
    verified : boolean;
    
}
