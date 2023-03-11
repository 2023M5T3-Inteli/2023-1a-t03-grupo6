import {
  Get,
  Post,
  Body,
  Param,
  Patch,
  Query,
  Delete,
  Controller,
} from "@nestjs/common";

import { Project } from "./entities/project.entity";
import { ProjectsService } from "./projects.service";
import { CreateProjectDto } from "./dto/create-project.dto";
import { UpdateProjectDto } from "./dto/update-project.dto";

import { throwError } from "./../utils/throwError.util";
//////////////////////////////////////////////////////////////////////////////////////

@Controller("projects")
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  create(@Body() createProjectDto: CreateProjectDto): Promise<Project> {
    return this.projectsService.create(createProjectDto);
  }

  @Get()
  findAll(@Query("name") name?: string): Promise<Project[]> {
    return this.projectsService.findAll(name);
  }

  @Get(":id")
  findOne(@Param("id") id: string): Promise<Project> {
    if (Number.isNaN(+id))
      throwError("BadRequestException", "Project id is not a number");

    return this.projectsService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateProjectDto: UpdateProjectDto
  ): Promise<Project> {
    if (Number.isNaN(+id))
      throwError("BadRequestException", "Project id is not a number");

    return this.projectsService.update(+id, updateProjectDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string): Promise<void> {
    if (Number.isNaN(+id))
      throwError("BadRequestException", "Project id is not a number");

    return this.projectsService.remove(+id);
  }
}
