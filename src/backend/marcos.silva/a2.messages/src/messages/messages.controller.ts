/**
 * decorators :
 *   class decorators - apply to entire class ie @Controller
 *   method decorators - apply to specific HTTP requests ie @Get @Post
 *   argument decorators - put into argument list ie @Body @Param
 *
 * data transfer object [dto] : apply validation rules to request handler
 *  use class-transformer to turn req.body into instance of dto class
 *  use class-validator to validate instance
 */
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from "@nestjs/common";

import { MessagesService } from "./messages.service";
import { CreateMessageDto } from "./dto/create-message.dto";
//////////////////////////////////////////////////////////////////////////////////////

@Controller("/messages")
export class MessagesController {
  constructor(public service: MessagesService) {}

  @Get()
  listMessages() {
    return this.service.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.service.createOne(body.content);
  }

  @Get("/:id")
  async getMessage(@Param("id") id: string) {
    const _message = await this.service.findOne(id);

    if (!_message) throw new NotFoundException("Message not found");

    return _message;
  }
}
