export class User {

  firstName: string;
  lastName: string;
  username: string;
  role: string;
  token: string;

  constructor() {
    this.username = '';
    this.firstName = '';
    this.lastName = '';
    this.role = '';
    this.token = '';
  }
}
