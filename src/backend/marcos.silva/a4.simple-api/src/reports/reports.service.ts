import { Repository } from "typeorm";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { Report } from "./reports.entity";
import { User } from "src/users/users.entity";
import { CreateReportDto } from "./dtos/create-report.dto";
//////////////////////////////////////////////////////////////////////////////////////

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Report) private repository: Repository<Report>
  ) {}

  async create(body: CreateReportDto, user: User) {
    const _report = this.repository.create(body);
    _report.user = user;
    return await this.repository.save(_report);
  }

  async updateApproved(id: number, approved: boolean) {
    const _report = await this.repository.findOne({
      where: { id },
      relations: ["user"],
    });
    if (!_report) throw new NotFoundException("Report NOT found");

    _report.approved = approved;
    return await this.repository.save(_report);
  }

  async findOne(id: number) {
    return !id ? null : await this.repository.findOne({ where: { id } });
  }
}
