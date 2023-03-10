import { IsBoolean } from "class-validator";
//////////////////////////////////////////////////////////////////////////////////////

/** data transfer object [Dto] : describe and validate properties of request body */
export class ApproveReportDto {
  @IsBoolean()
  approved: boolean;
}
