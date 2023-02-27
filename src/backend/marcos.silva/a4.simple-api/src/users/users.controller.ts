/**
 * decorators :
 *   class decorators - apply to entire class ie @Controller
 *   param decorators - apply to specific HTTP requests ie @Get @Post
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
import { UpdateUserDto } from "./dtos/update-user.dto";
import { SignupUserDto } from "./dtos/signup-user.dto";
import { SigninUserDto } from "./dtos/signin-user.dto";
import { OutboundUserDto } from "./dtos/outbound-user.dto";
import { CurrentUser } from "./decorators/current-user.decorator";
import { CurrentUserInterceptor } from "./interceptors/current-user.interceptor";
import { User } from "./users.entity";
import {
  Serialize,
  SerializeInterceptor2,
} from "src/interceptors/serialize.interceptor";
//////////////////////////////////////////////////////////////////////////////////////

@UseInterceptors(ClassSerializerInterceptor)
@UseInterceptors(CurrentUserInterceptor)
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
  async signoutUser(@CurrentUser() user: User, @Session() session: any) {
    if (!user) throw new NotFoundException("User NOT logged in");

    session.userId = undefined;
    return "User signed out";
  }

  @Get("getMe")
  getCurrentUser(@CurrentUser() user: User) {
    if (!user) throw new NotFoundException("User NOT logged in");
    return user;
  }

  @Patch("updateMe")
  @Serialize(OutboundUserDto)
  async updateUser(
    @CurrentUser() user: User,
    @Body() body: UpdateUserDto,
    @Session() session: any
  ) {
    if (!user) throw new NotFoundException("User NOT logged in");
    return await this.UsersService.update(session.userId, body);
  }

  @Delete("deleteMe")
  async removeUser(@CurrentUser() user: User, @Session() session: any) {
    if (!user) throw new NotFoundException("User NOT logged in");
    return this.UsersService.remove(session.userId);
  }

  @Serialize(OutboundUserDto)
  @UseInterceptors(new SerializeInterceptor2(OutboundUserDto))
  @Get()
  async findAllUsers(
    @Query("email") email: string,
    @Session() session: any,
    @CurrentUser() user: User
  ) {
    if (!user) throw new NotFoundException("User NOT logged in");

    console.log("handler is running");
    return await this.UsersService.find(email);
  }

  @Get(":id")
  async findUser(
    @Param("id") id: string,
    @Session() session: any,
    @CurrentUser() user: User
  ) {
    if (!user) throw new NotFoundException("User NOT logged in");

    const _user = await this.UsersService.findOne(parseInt(id));
    if (!_user) throw new NotFoundException("User NOT found");
    return _user;
  }
}
