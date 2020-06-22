import {Role} from './role';

export class User {

  firstName: string;
  lastName: string;
  username: string;
  roles: Role[];
  token: string;

  constructor() {
    this.username = '';
    this.firstName = '';
    this.lastName = '';
    this.roles = [];
    this.token = '';
  }
}
