/**
 * decorators :
 *   class decorators - apply to entire class ie @Controller
 *   method decorators - apply to specific HTTP requests ie @Get @Post
 *   argument decorators - put into argument list ie @Body @Param @Session
 */
import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Query,
  Param,
  Delete,
  Session,
  UseInterceptors,
  NotFoundException,
  ClassSerializerInterceptor,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UsersService } from "./users.service";
import { UpdateUserDto } from "./dto/update-user.dto";
import { SignupUserDto } from "./dto/signup-user.dto";
import { SigninUserDto } from "./dto/signin-user.dto";
import { OutboundUserDto } from "./dto/outbound-user.dto";
import {
  Serialize,
  SerializeInterceptor2,
} from "src/interceptors/serialize.interceptor";
//////////////////////////////////////////////////////////////////////////////////////

@UseInterceptors(ClassSerializerInterceptor)
@Controller("user")
export class UsersController {
  constructor(
    private UsersService: UsersService,
    private AuthService: AuthService
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
  async signoutUser(@Session() session: any) {
    const _user = await this.UsersService.findOne(session.userId);
    if (!_user) throw new NotFoundException("User NOT logged in");

    session.userId = undefined;
    return "User signed out";
  }

  @Patch("updateMe")
  @Serialize(OutboundUserDto)
  async updateUser(@Body() body: UpdateUserDto, @Session() session: any) {
    const _user = await this.UsersService.findOne(session.userId);
    if (!_user) throw new NotFoundException("User NOT logged in");

    return await this.UsersService.update(session.userId, body);
  }

  @Delete("deleteMe")
  async removeUser(@Session() session: any) {
    const _user = await this.UsersService.findOne(session.userId);
    if (!_user) throw new NotFoundException("User NOT logged in");

    return this.UsersService.remove(session.userId);
  }

  @Serialize(OutboundUserDto)
  @UseInterceptors(new SerializeInterceptor2(OutboundUserDto))
  @Get()
  async findAllUsers(@Query("email") email: string, @Session() session: any) {
    const _user = await this.UsersService.findOne(session.userId);
    if (!_user) throw new NotFoundException("User NOT logged in");

    console.log("handler is running");
    return await this.UsersService.find(email);
  }

  @Get(":id")
  async findUser(@Param("id") id: string, @Session() session: any) {
    const _user = await this.UsersService.findOne(session.userId);
    if (!_user) throw new NotFoundException("User NOT logged in");

    const _targetUser = await this.UsersService.findOne(parseInt(id));
    if (!_targetUser) throw new NotFoundException("User NOT found");
    return _targetUser;
  }
}
