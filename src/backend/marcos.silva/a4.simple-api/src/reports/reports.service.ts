import { Repository } from "typeorm";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { Report } from "./reports.entity";
import { User } from "src/users/users.entity";
import { GetEstimateDto } from "./dtos/get-estimate.dto";
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

  /** restrict SQL query arguments and force them thru DTO protects agains SQL injection attacks */
  async createEstimate({
    make,
    model,
    lng,
    lat,
    year,
    mileage,
  }: GetEstimateDto) {
    return await this.repository
      .createQueryBuilder()
      .select("AVG(price)", "price")
      .where("make = :make", { make })
      .andWhere("model = :model", { model })
      .andWhere("lng - :lng BETWEEN -5 AND 5", { lng })
      .andWhere("lat - :lat BETWEEN -5 AND 5", { lat })
      .andWhere("year - :year BETWEEN -3 AND 3", { year })
      .andWhere("approved IS TRUE")
      .orderBy("ABS(mileage - :mileage)", "DESC")
      .setParameters({ mileage })
      .limit(3)
      .getRawOne();
  }
}
