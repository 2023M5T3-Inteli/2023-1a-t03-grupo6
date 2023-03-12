/**
 * @fileoverview This file contains the authentication service for the users module of the dell-match app.
 */
import { Injectable, Req } from "@nestjs/common";

const jwt = require("jsonwebtoken");

import { SigninDto } from "./dto/signin.dto";
import { User } from "./entities/user.entity";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";

import { throwError } from "../utils/throwError.util";
//////////////////////////////////////////////////////////////////////////////////////

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async signup(@Req() req: any, createUserDto: CreateUserDto): Promise<User> {
    const _user = await this.usersService.create(createUserDto);

    // TODO : send welcome email to new customer

    req.session.token = this.generateToken(_user.id);
    return _user;
  }

  async signin(@Req() req: any, signinDto: SigninDto): Promise<any> {
    const [_user] = await this.usersService.findAll(signinDto.email);
    if (!_user) throwError("NotFoundException", "User not found");

    req.session.token = this.generateToken(_user.id);
    return _user;
  }

  async signout(req: any): Promise<string> {
    return "hi there";
  }

  private generateToken(userId: number): string {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES,
    });
  }
}
