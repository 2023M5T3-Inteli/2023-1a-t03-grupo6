/**
 * decorators :
 *   class decorators - apply to entire class ie @Controller
 *   param decorators - apply to specific HTTP requests ie @Get @Post
 *   argument decorators - put into argument list ie @Body @Param @Session
 */
import { Post, Body, Session, Controller, UseGuards } from "@nestjs/common";

import { Report } from "./reports.entity";
import { ReportsService } from "./reports.service";
import { AuthGuard } from "src/users/guards/auth.guard";
import { CreateReportDto } from "./dtos/create-report.dto";
//////////////////////////////////////////////////////////////////////////////////////

@Controller("report")
export class ReportsController {
  constructor(private ReportsService: ReportsService) {}

  @Post("create")
  @UseGuards(AuthGuard)
  async createReport(@Body() body: CreateReportDto, @Session() session: any) {
    const _report = this.ReportsService.create(body);
    return _report;
  }
}
