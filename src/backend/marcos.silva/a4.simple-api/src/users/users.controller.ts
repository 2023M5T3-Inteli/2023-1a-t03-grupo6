/**
 * decorators :
 *   class decorators - apply to entire class ie @Controller
 *   method decorators - apply to specific HTTP requests ie @Get @Post
 *   argument decorators - put into argument list ie @Body @Param
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
  UseInterceptors,
  ClassSerializerInterceptor,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { OutboundUserDto } from "./dto/outbound-user.dto";
import {
  Serialize,
  SerializeInterceptor2,
} from "src/interceptors/serialize.interceptor";
//////////////////////////////////////////////////////////////////////////////////////

@UseInterceptors(ClassSerializerInterceptor)
@Controller("auth")
export class UsersController {
  constructor(private service: UsersService) {}

  @Post()
  createUser(@Body() body: CreateUserDto) {
    return this.service.create(body);
  }

  @Patch(":id")
  updateUser(@Param("id") id: string, @Body() body: UpdateUserDto) {
    return this.service.update(parseInt(id), body);
  }

  @Delete(":id")
  removeUser(@Param("id") id: string) {
    return this.service.remove(parseInt(id));
  }

  @Serialize(OutboundUserDto)
  @UseInterceptors(new SerializeInterceptor2(OutboundUserDto))
  @Get()
  async findAllUsers(@Query("email") email: string) {
    console.log("handler is running");
    return await this.service.find(email);
  }

  @Get(":id")
  findUser(@Param("id") id: string) {
    const _user = this.service.findOne(parseInt(id));
    if (!_user) throw new NotFoundException("User NOT found");
    return _user;
  }
}
