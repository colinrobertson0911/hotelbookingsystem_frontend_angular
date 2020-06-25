import { Hotel } from './hotel';
import { User } from './user';

export class Review {

    hotel: Hotel[];
    customer: User;
    message: String;
    score: number;
}