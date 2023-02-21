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
import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Query,
  Param,
  NotFoundException,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Controller("auth")
export class UsersController {
  constructor(private service: UsersService) {}

  @Post()
  createUser(@Body() body: CreateUserDto) {
    this.service.create(body);
  }

  @Patch(":id")
  async updateUser(@Param("id") id: string, @Body() body: UpdateUserDto) {
    return await this.service.update(parseInt(id), body);
  }

  @Delete(":id")
  async removeUser(@Param("id") id: string) {
    await this.service.remove(parseInt(id));
  }

  @Get()
  findAllUsers(@Query("email") email: string) {
    return this.service.find(email);
  }

  @Get(":id")
  async findUser(@Param("id") id: string) {
    const _user = await this.service.findOne(parseInt(id));
    if (!_user) throw new NotFoundException("User NOT found");
    return _user;
  }
}
