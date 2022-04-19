import { Injectable } from '@nestjs/common';
import { User } from './user';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  users: CreateUserDto[] = [];

  create(user: CreateUserDto) {
    this.users.push(user);
  }

  findOne() {
    return this.users.find((user) => user === user);
  }

  remove(user: User) {
    this.users = this.users.splice(this.users.indexOf(user), 1);
  }

  findAll() {
    return this.users;
  }
}
