import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('/getUsers')
  findAll(): User[] {
    return this.userService.findAll();
  }

  @Post(`/removeUser`)
  remove(@Body(new ValidationPipe()) user: User) {
    this.userService.remove(user);
  }

  @Post(`/getUser`)
  findOne(@Body(ValidationPipe) user: User): User {
    return this.userService.findOne(user);
  }

  @Post(`/updateUser`)
  update(@Body(ValidationPipe) user: User): void {
    return this.userService.update(user);
  }

  @Post(`/addUser`)
  create(@Body(ValidationPipe) user: User): void {
    return this.userService.create(user);
  }
}
