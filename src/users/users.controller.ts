import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user';
import { CreateUserDto } from './dto/create-user.dto';

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
  findOne(): User {
    return this.userService.findOne();
  }

  @Post(`/addUser`)
  create(@Body(ValidationPipe) user: CreateUserDto): void {
    return this.userService.create(user);
  }
}
