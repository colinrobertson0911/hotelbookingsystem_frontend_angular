import { Room } from './room';

export class HotelForm {
    constructor(
        public hotelName: string,
        public address: string,
        public postcode: string,
        public city: string,
        public ammenities: string,
        public starRating: number,
        public airportTransfers: boolean,
        public room: Room[]
    ) {}
}
