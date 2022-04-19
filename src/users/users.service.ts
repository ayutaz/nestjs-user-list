import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  users: CreateUserDto[] = [];

  create(user: CreateUserDto) {
    this.users.push(user);
  }

  remove(user: CreateUserDto) {
    this.users.splice(this.users.indexOf(user), 1);
  }

  findAll(): CreateUserDto[] {
    return this.users;
  }

  update(user: CreateUserDto) {
    this.users[this.users.indexOf(user)] = user;
  }
}
