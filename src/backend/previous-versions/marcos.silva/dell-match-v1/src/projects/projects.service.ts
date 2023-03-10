import { Repository } from "typeorm";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Project } from "./projects.entity";
//////////////////////////////////////////////////////////////////////////////////////

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project) private repository: Repository<Project>
  ) {}

  async create(_body: any) {
    const _project = this.repository.create(_body);
    return await this.repository.save(_project);
  }

  async update(id: number, attrs: Partial<Project>) {
    const _project = await this.repository.findOne({ where: { id } });
    if (!_project) throw new NotFoundException("Project not found");
    return await this.repository.save(Object.assign(_project, attrs));
  }

  async remove(id: number) {
    const _project = await this.repository.findOne({ where: { id } });
    if (!_project) throw new NotFoundException("Project not found");
    await this.repository.remove(_project);
    return `Project ${id} removed`;
  }
}
