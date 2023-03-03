/**
 * decorators :
 *   class decorators - apply to entire class ie @Controller
 *   param decorators - apply to specific HTTP requests ie @Get @Post
 *   argument decorators - put into argument list ie @Body @Param @Session
 */
import { Post, Body, Controller, UseGuards } from "@nestjs/common";

import { Report } from "./reports.entity";
import { User } from "src/users/users.entity";
import { ReportsService } from "./reports.service";
import { AuthGuard } from "src/users/guards/auth.guard";
import { CreateReportDto } from "./dtos/create-report.dto";
import { Serialize } from "./interceptors/serialize.interceptor";
import { OutboundUserDto } from "src/users/dtos/outbound-user.dto";
import { CurrentUser } from "src/users/decorators/current-user.decorator";
import { OutboundReportDto } from "./dtos/outbound-report.dto";
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
}
