export class User {
  // tslint:disable: variable-name
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;

  constructor(
    email: string,
    password: string,
    first_name?: string,
    last_name?: string
  ) {
    this.email = email;
    this.password = password;
    this.first_name = first_name;
    this.last_name = last_name;
  }
}
