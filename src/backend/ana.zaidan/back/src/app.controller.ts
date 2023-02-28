import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './modules/user/dto/create-user.dto';
import { UserService } from './modules/user/user.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller()
export class UserController {
  constructor(private readonly userService: UserService){}

  @Post()
  async create(@Body() data: CreateUserDto){
    return this.userService.create(data);
  }
}