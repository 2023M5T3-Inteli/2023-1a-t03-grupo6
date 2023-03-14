/**
 * IMPORTANT ODDITY ABOUT SQL QUERIES
 * find*(arg) methods : if arg = null | undefined returns first element in table
 */
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { Project } from "./entities/project.entity";
import { User } from "../users/entities/user.entity";
import { CreateProjectDto } from "./dto/create-project.dto";
import { UpdateProjectDto } from "./dto/update-project.dto";

import { throwError } from "../utils/throwError.util";
//////////////////////////////////////////////////////////////////////////////////////

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project) private projectsRepository: Repository<Project>
  ) {}

  async create(
    createProjectDto: CreateProjectDto,
    user: User
  ): Promise<Project> {
    console.log("createProjectDto: ", createProjectDto);
    console.log("user: ", user);

    const [_projectExists] = await this.findAll(createProjectDto.name);
    if (_projectExists)
      throwError("BadRequestException", "Project already exists");

    const _project = this.projectsRepository.create(createProjectDto);
    _project.manager = user;
    return await this.projectsRepository.save(_project);
  }

  // async create(body: CreateReportDto, user: User) {
  //   const _report = this.repository.create(body);
  //   _report.user = user;
  //   return await this.repository.save(_report);
  // }

  findAll(name?: string): Promise<Project[]> {
    return this.projectsRepository.find({ where: { name } });
  }

  async findOne(id: number): Promise<Project> {
    const _project = await this.projectsRepository.findOne({ where: { id } });
    if (!_project) throwError("NotFoundException", "Project not found");
    return _project;
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    const _project = await this.findOne(id);
    return await this.projectsRepository.save(
      Object.assign(_project, updateProjectDto)
    );
  }

  async remove(id: number) {
    const _project = await this.findOne(id);
    await this.projectsRepository.remove(_project);
    return;
  }
}
