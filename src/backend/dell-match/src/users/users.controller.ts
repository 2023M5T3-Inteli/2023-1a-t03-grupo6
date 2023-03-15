import {
  Get,
  Req,
  Post,
  Body,
  Patch,
  Param,
  Query,
  Delete,
  Controller,
} from "@nestjs/common";

import { User } from "./entities/user.entity";
import { AuthService } from "./auth.service";
import { SigninDto } from "./dto/signin.dto";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { throwError } from "./../utils/throwError.util";
import { ApiTags, ApiCreatedResponse, ApiForbiddenResponse, ApiBadRequestResponse} from '@nestjs/swagger';
//////////////////////////////////////////////////////////////////////////////////////

@ApiTags('user')

@Controller("users")
export class UsersController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService
  ) {}

  /** @dev auth */
  @Post("signup")
  @ApiCreatedResponse({ description: 'The record has been successfully created.'})
  @ApiForbiddenResponse({ description: 'Forbidden.'})
  signup(@Req() req: any, @Body() createUserDto: CreateUserDto): Promise<User> {
    return this.authService.signup(req, createUserDto);
  }

  @Post("signin")
  @ApiCreatedResponse({ description: 'The record has been successfully created.'})
  @ApiForbiddenResponse({ description: 'Forbidden.'})
  signin(@Req() req: any, @Body() signinDto: SigninDto): Promise<any> {
    return this.authService.signin(req, signinDto);
  }

  @Get("signout")
  @ApiCreatedResponse({ description: 'The record has been successfully created.'})
  @ApiForbiddenResponse({ description: 'Forbidden.'})
  signout(@Req() req: any): any {
    return this.authService.signout(req);
  }

  /** @dev basic CRUD - should be restricted by IP  */
  @Post()
  @ApiCreatedResponse({ description: 'The record has been successfully created.'})
  @ApiForbiddenResponse({ description: 'Forbidden.'})
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiCreatedResponse({ description: 'The record has been successfully created.'})
  @ApiForbiddenResponse({ description: 'Forbidden.'})
  findAll(@Query("email") email?: string): Promise<User[]> {
    return this.usersService.findAll(email);
  }

  @Get(":id")
  @ApiCreatedResponse({ description: 'The record has been successfully created.'})
  @ApiForbiddenResponse({ description: 'Forbidden.'})
  @ApiBadRequestResponse({ description: 'User id is not a number.'})
  findOne(@Param("id") id: string): Promise<User> {
    if (Number.isNaN(+id))
      throwError("BadRequestException", "User id is not a number");

    return this.usersService.findOne(+id);
  }

  @Patch(":id")
  @ApiCreatedResponse({ description: 'The record has been successfully created.'})
  @ApiForbiddenResponse({ description: 'Forbidden.'})
  @ApiBadRequestResponse({ description: 'User id is not a number.'})
  update(
    @Param("id") id: string,
    @Body() updateUserDto: UpdateUserDto
  ): Promise<User> {
    if (Number.isNaN(+id))
      throwError("BadRequestException", "User id is not a number.");

    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(":id")
  @ApiCreatedResponse({ description: 'The record has been successfully created.'})
  @ApiForbiddenResponse({ description: 'Forbidden.'})
  @ApiBadRequestResponse({ description: 'User id is not a number.'})
  remove(@Param("id") id: string): Promise<void> {
    if (Number.isNaN(+id))
      throwError("BadRequestException", "User id is not a number");

    return this.usersService.remove(+id);
  }
}
