import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { Report } from "./reports.entity";
//////////////////////////////////////////////////////////////////////////////////////

interface ReportAttrs {
  price: number;
  make: string;
  model: string;
  year: number;
  lng: number;
  lat: number;
  mileage: number;
}

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Report) private repository: Repository<Report>
  ) {}

  async create(_body: ReportAttrs) {
    const _report = this.repository.create(_body);
    return await this.repository.save(_report);
  }
}
