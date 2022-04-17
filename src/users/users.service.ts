import { Injectable } from '@nestjs/common';
import { User } from './user';

@Injectable()
export class UsersService {
  users: User[] = [];

  create(user: User) {
    this.users.push(user);
  }

  findOne(user: User) {
    return this.users.find((user) => user === user);
  }

  remove(user: User) {
    this.users = this.users.splice(this.users.indexOf(user), 1);
  }

  update(user: User) {
    let tmp_user = this.users.find((user) => user.name === user.name);
    tmp_user = user;
  }

  findAll() {
    return this.users;
  }
}
