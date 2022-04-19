import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post(`/addUser`)
  create(@Body(ValidationPipe) user: CreateUserDto) {
    return this.userService.create(user);
  }

  @Get(`/getUsers`)
  findAll() {
    return this.userService.findAll();
  }

  @Post(`/deleteUser`)
  remove(@Body(ValidationPipe) user: CreateUserDto) {
    return this.userService.remove(user);
  }

  @Post(`/updateUser`)
  update(@Body(ValidationPipe) user: CreateUserDto) {
    return this.userService.update(user);
  }
}
