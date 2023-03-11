/**
 * decorators :
 *   class decorators - apply to entire class ie @Controller
 *   param decorators - apply to specific HTTP requests ie @Get @Post
 *   argument decorators - put into argument list ie @Body @Param @Session
 */
import {
  Get,
  Post,
  Body,
  Patch,
  Query,
  Param,
  Delete,
  Session,
  UseGuards,
  Controller,
  UseInterceptors,
  NotFoundException,
  ClassSerializerInterceptor,
} from "@nestjs/common";

import { User } from "./users.entity";
import { AuthService } from "./auth.service";
import { UsersService } from "./users.service";
import { AuthGuard } from "./guards/auth.guard";
import { UpdateUserDto } from "./dtos/update-user.dto";
import { SignupUserDto } from "./dtos/signup-user.dto";
import { SigninUserDto } from "./dtos/signin-user.dto";
import { OutboundUserDto } from "./dtos/outbound-user.dto";
import { CurrentUser } from "./decorators/current-user.decorator";
import {
  Serialize,
  SerializeInterceptor2,
} from "./interceptors/serialize.interceptor";
//////////////////////////////////////////////////////////////////////////////////////

@Controller("user")
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {
  constructor(
    private AuthService: AuthService,
    private UsersService: UsersService
  ) {}

  @Post("signup")
  @Serialize(OutboundUserDto)
  async signupUser(@Body() body: SignupUserDto, @Session() session: any) {
    const _user = await this.AuthService.signup(body);
    session.userId = _user.id;
    return _user;
  }

  @Post("signin")
  @Serialize(OutboundUserDto)
  async signinUser(@Body() body: SigninUserDto, @Session() session: any) {
    const _user = await this.AuthService.signin(body);
    session.userId = _user.id;
    return _user;
  }

  @Get("signout")
  @UseGuards(AuthGuard)
  async signoutUser(@Session() session: any) {
    session.userId = undefined;
    return "User signed out";
  }

  @Get("getMe")
  @UseGuards(AuthGuard)
  getCurrentUser(@CurrentUser() user: User) {
    return user;
  }

  @Patch("updateMe")
  @UseGuards(AuthGuard)
  @Serialize(OutboundUserDto)
  async updateUser(@Body() body: UpdateUserDto, @Session() session: any) {
    return await this.UsersService.update(session.userId, body);
  }

  @Delete("deleteMe")
  @UseGuards(AuthGuard)
  async removeUser(@Session() session: any) {
    return this.UsersService.remove(session.userId);
  }

  @Get()
  @UseGuards(AuthGuard)
  @Serialize(OutboundUserDto)
  @UseInterceptors(new SerializeInterceptor2(OutboundUserDto))
  async findAllUsers(@Query("email") email: string) {
    console.log("handler is running");
    return await this.UsersService.find(email);
  }

  @Get(":id")
  @UseGuards(AuthGuard)
  async findUser(@Param("id") id: string) {
    const _user = await this.UsersService.findOne(parseInt(id));
    if (!_user) throw new NotFoundException("User NOT found");
    return _user;
  }
}
