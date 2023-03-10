import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
  Delete,
  Controller,
} from "@nestjs/common";

import { User } from "./entities/user.entity";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { throwError } from "./../utils/throwError.util";
//////////////////////////////////////////////////////////////////////////////////////

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(@Query("email") email?: string): Promise<User[]> {
    return this.usersService.findAll(email);
  }

  @Get(":id")
  findOne(@Param("id") id: string): Promise<User> {
    if (Number.isNaN(+id))
      throwError("BadRequestException", "User id is not a number");

    return this.usersService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateUserDto: UpdateUserDto
  ): Promise<User> {
    if (Number.isNaN(+id))
      throwError("BadRequestException", "User id is not a number");

    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string): Promise<void> {
    if (Number.isNaN(+id))
      throwError("BadRequestException", "User id is not a number");

    return this.usersService.remove(+id);
  }
}
