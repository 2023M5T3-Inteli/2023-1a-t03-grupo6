import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { User } from "src/users/users.entity";
import { Report } from "./reports.entity";
import { CreateReportDto } from "./dtos/create-report.dto";
//////////////////////////////////////////////////////////////////////////////////////

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Report) private repository: Repository<Report>
  ) {}

  async create(_body: CreateReportDto, _user: User) {
    const _report = this.repository.create(_body);
    _report.user = _user;
    return await this.repository.save(_report);
  }
}
