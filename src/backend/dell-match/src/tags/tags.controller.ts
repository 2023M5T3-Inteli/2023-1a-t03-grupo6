import {
    Get,
    Param,
    Controller
  } from "@nestjs/common";
  
  import { Tag } from "./entities/tag.entity"; 
  import { TagsService } from "./tags.service"; 
  import { throwError } from "./../utils/throwError.util";
  //////////////////////////////////////////////////////////////////////////////////////
  
  @Controller("tags")
  export class TagsController {
    constructor(
      private readonly usersService: TagsService
    ) {}
  
    
  
    @Get(":idTag")
    findOne(@Param("idTag") id: string): Promise<Tag> {
      if (Number.isNaN(+id))
        throwError("BadRequestException", "User id is not a number");
  
      return this.usersService.findOne(+id);
    }
  
    
  }
