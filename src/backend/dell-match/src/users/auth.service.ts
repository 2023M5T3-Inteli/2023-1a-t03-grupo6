/**
 * @fileoverview This file contains the authentication service for the users module of the dell-match app.
 */
import { Injectable } from "@nestjs/common";

const jwt = require("jsonwebtoken");

import { User } from "./entities/user.entity";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";

import { throwError } from "../utils/throwError.util";
//////////////////////////////////////////////////////////////////////////////////////

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async create(createUserDto: CreateUserDto): Promise<string> {
    // async create(createUserDto: CreateUserDto): Promise<User> {
    // const _user = this.usersService.create(createUserDto);

    // TODO : send welcome email to new customer

    /**
     *  JWT token returned to the client
     * @DEV TODO : implement JWT token auto renewal
     * @DEV TODO : move JWT token creation to a separate library
     */

    const _token = jwt.sign({ ID: 1 }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES,
    });
    console.log(_token);

    const _cookieOptions = {
      expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES),
      httpOnly: true, // cookie cannot be accessed or modified by the browser
      secure: false, // cookie will only be sent on an encrypted connection
    };

    if (process.env.NODE_ENV === "production") _cookieOptions.secure = true;

    return "hi there";
  }
}
