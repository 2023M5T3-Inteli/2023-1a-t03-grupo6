/**
 * decorators :
 *   class decorators - apply to entire class ie @Controller
 *   method decorators - apply to specific HTTP requests ie @Get @Post
 *   argument decorators - put into argument list ie @Body @Param
 *
 * data transfer object [dto] :
 *  act as interceptor and apply validation rules to request/response handler
 *  use class-transformer to turn request or response data into instance of dto class
 *  use class-validator to validate instance
 *
 * interceptors [middlewares] :
 *   can be applied to single handler, all handlers in controller or globally
 *   standard : use with class-transformer serializers eg Exclude
 *              use in place of dto, but less flexible
 *   custom : more flexible, used by adapting dto architecture
 *
 *   naming convention : class <Name>Interceptor
 *   method convention : intercept(context: ExecutionContext, next: CallHandler)
 *     'intercept' method is called automatically by Nest
 *     'context' provides information on incoming request or outgoing response
 *     'next' provides reference to handler in controller
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

  @Get()
  findAllUsers(@Query("email") email: string) {
    return this.service.find(email);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(":id")
  findUser(@Param("id") id: string) {
    const _user = this.service.findOne(parseInt(id));
    if (!_user) throw new NotFoundException("User NOT found");
    return _user;
  }
}
