import {
  IsIn,
  IsArray,
  IsNumber,
  IsString,
  IsOptional,
  IsDateString,
  ValidateNested,
} from "class-validator";
import { Transform, plainToClass, Type } from "class-transformer";

import { throwError } from "src/utils/throwError.util";
//////////////////////////////////////////////////////////////////////////////////////

/** data transfer object [Dto] : describe and validate properties of request body */
export class CreateProjectDto {
  @IsString()
  name: string;

  @IsString()
  @Transform(({ value }) => value.toLowerCase())
  @IsIn(["it", "commercial", "marketing", "hr", "finance", "legal", "other"], {
    message:
      "Area must be one of: IT, Commercial, Marketing, HR, Finance, Legal, Other",
  })
  area: string;

  @IsString()
  description: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  keywords: string[];

  @IsString()
  manager: string;

  @IsNumber()
  teamSize: number;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  teamMembers: string[];

  @IsString()
  @Transform(({ value }) => value.toLowerCase())
  @IsIn(["open", "in progress", "cancelled"], {
    message: "Status must be one of: Open, In progress, Cancelled",
  })
  status: string;

  // TODO : add validation for dates (applicationDeadline, startDate, endDate)
  @IsDateString()
  applicationDeadline: Date;

  @IsDateString()
  startDate: Date;

  @IsDateString()
  endDate: Date;
}
