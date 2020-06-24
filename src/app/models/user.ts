import {Role} from './role';

export class User {

  userId: number;
  firstName: string;
  lastName: string;
  username: string;
  roles: Role[];
  token: string;
  password: string;

  constructor() {
    this.userId = 0;
    this.username = '';
    this.firstName = '';
    this.lastName = '';
    this.roles = [];
    this.token = '';
    this.password = '';
  }
}
