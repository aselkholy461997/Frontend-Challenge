import { User } from './user.model';
export class Admin extends User {
  constructor(name: string, email: string, password: string) {
    super(name, email, password);
  }
}
