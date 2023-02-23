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
} from "@nestjs/common";
import { ProjectsService } from "./projects.service";
import { CreateProjectDto } from "./dto/create-project.dto";
import { UpdateProjectDto } from "./dto/update-project.dto";
//////////////////////////////////////////////////////////////////////////////////////

@Controller("project")
export class ProjectsController {
  constructor(private service: ProjectsService) {}

  @Post()
  createProject(@Body() body: CreateProjectDto) {
    return this.service.create(body);
  }

  @Patch(":id")
  updateProject(@Param("id") id: string, @Body() body: UpdateProjectDto) {
    return this.service.update(parseInt(id), body);
  }

  @Delete(":id")
  removeProject(@Param("id") id: string) {
    return this.service.remove(parseInt(id));
  }
}
