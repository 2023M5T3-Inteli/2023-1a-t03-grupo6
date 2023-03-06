/**
 * decorators :
 *   class decorators - apply to entire class ie @Controller
 *   param decorators - apply to specific HTTP requests ie @Get @Post
 *   argument decorators - put into argument list ie @Body @Param @Session
 */
import {
  Get,
  Body,
  Post,
  Param,
  Patch,
  Query,
  UseGuards,
  Controller,
} from "@nestjs/common";

import { User } from "src/users/users.entity";
import { ReportsService } from "./reports.service";
import { AuthGuard } from "src/users/guards/auth.guard";
import { GetEstimateDto } from "./dtos/get-estimate.dto";
import { AdminGuard } from "src/users/guards/admin.guard";
import { CreateReportDto } from "./dtos/create-report.dto";
import { ApproveReportDto } from "./dtos/approve-report.dto";
import { OutboundReportDto } from "./dtos/outbound-report.dto";
import { Serialize } from "./interceptors/serialize.interceptor";
import { CurrentUser } from "src/users/decorators/current-user.decorator";
//////////////////////////////////////////////////////////////////////////////////////

@Controller("report")
export class ReportsController {
  constructor(private ReportsService: ReportsService) {}

  @Post("create")
  @UseGuards(AuthGuard)
  @Serialize(OutboundReportDto)
  async createReport(@Body() body: CreateReportDto, @CurrentUser() user: User) {
    const _report = this.ReportsService.create(body, user);
    return _report;
  }

  @Patch("approve/:id")
  @UseGuards(AuthGuard)
  @UseGuards(AdminGuard)
  @Serialize(OutboundReportDto)
  async approveReport(@Param("id") id: string, @Body() body: ApproveReportDto) {
    return await this.ReportsService.updateApproved(
      parseInt(id),
      body.approved
    );
  }

  @Get("getEstimate")
  getEstimate(@Query() query: GetEstimateDto) {
    return this.ReportsService.createEstimate(query);
  }
}
