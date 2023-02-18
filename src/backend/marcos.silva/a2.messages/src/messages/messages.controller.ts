/**
 * decorators :
 *   class decorators - apply to entire class ie @Controller
 *   method decorators - apply to specific function ie @Get @Post
 *   argument decorators - put into argument list ie @Body @Param
 *
 * data transfer object [dto] : apply validation rules to request handler
 *  use class-transformer to turn req.body into instance of dto class
 *  use class-validator to validate instance
 */
import { Controller, Get, Post, Body, Param } from "@nestjs/common";
import { CreateMessageDto } from "./dto/create-message.dto";
//////////////////////////////////////////////////////////////////////////////////////

@Controller("/messages")
export class MessagesController {
  @Get()
  listMessages() {}

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body);
  }

  @Get("/:id")
  getMessage(@Param("id") id: string) {
    console.log(id);
  }
}
