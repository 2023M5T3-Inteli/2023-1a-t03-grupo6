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
import { User } from "src/users/entities/user.entity";
import { CreateProjectDto } from "./dto/create-project.dto";
import { UpdateProjectDto } from "./dto/update-project.dto";
import { CurrentUser } from "src/users/decorators/current-user.decorator";

import { throwError } from "./../utils/throwError.util";

import { ApiTags, ApiCreatedResponse, ApiForbiddenResponse } from '@nestjs/swagger';
//////////////////////////////////////////////////////////////////////////////////////

@ApiTags('project')

@Controller("projects")
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  @ApiCreatedResponse({ description: 'The record has been successfully created.'})
  @ApiForbiddenResponse({ description: 'Forbidden.'})
  create(
    @Body() createProjectDto: CreateProjectDto,
    @CurrentUser() user: User
  ): Promise<Project> {
    return this.projectsService.create(createProjectDto, user);
  }

  @Get()
  @ApiCreatedResponse({ description: 'The record has been successfully created.'})
  @ApiForbiddenResponse({ description: 'Forbidden.'})
  findAll(@Query("name") name?: string): Promise<Project[]> {
    return this.projectsService.findAll(name);
  }

  @Get(":id")
  @ApiCreatedResponse({ description: 'The record has been successfully created.'})
  @ApiForbiddenResponse({ description: 'Forbidden.'})
  findOne(@Param("id") id: string): Promise<Project> {
    if (Number.isNaN(+id))
      throwError("BadRequestException", "Project id is not a number");

    return this.projectsService.findOne(+id);
  }

  @Patch(":id")
  @ApiCreatedResponse({ description: 'The record has been successfully created.'})
  @ApiForbiddenResponse({ description: 'Forbidden.'})
  update(
    @Param("id") id: string,
    @Body() updateProjectDto: UpdateProjectDto
  ): Promise<Project> {
    if (Number.isNaN(+id))
      throwError("BadRequestException", "Project id is not a number");

    return this.projectsService.update(+id, updateProjectDto);
  }

  @Delete(":id")
  @ApiCreatedResponse({ description: 'The record has been successfully created.'})
  @ApiForbiddenResponse({ description: 'Forbidden.'})
  remove(@Param("id") id: string): Promise<void> {
    if (Number.isNaN(+id))
      throwError("BadRequestException", "Project id is not a number");

    return this.projectsService.remove(+id);
  }
}
