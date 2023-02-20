/**
 * decorators :
 *   class decorators - apply to entire class ie @Controller
 *   method decorators - apply to specific HTTP requests ie @Get @Post
 *   argument decorators - put into argument list ie @Body @Param
 *
 * data transfer object [dto] : apply validation rules to request handler
 *  use class-transformer to turn req.body into instance of dto class
 *  use class-validator to validate instance
 */
import { Controller, Get, Post, Body } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller("auth")
export class UsersController {
  constructor(private service: UsersService) {}

  @Get()
  getRoute(): string {
    return "users GET route";
  }

  @Post("signup")
  createUser(@Body() body: CreateUserDto) {
    return this.service.createOne(body);
  }
}
