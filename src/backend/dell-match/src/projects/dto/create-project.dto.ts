import {
  IsIn,
  Length,
  IsArray,
  IsNumber,
  IsString,
  IsOptional,
  IsDateString,
} from "class-validator";
import { Transform } from "class-transformer";
//////////////////////////////////////////////////////////////////////////////////////

/** data transfer object [Dto] : describe and validate properties of request body */
export class CreateProjectDto {
  @IsString()
  @Length(3, 50, {
    message: "Name must be between 3 and 50 characters",
  })
  name: string;

  @IsString()
  @Transform(({ value }) => value.toLowerCase())
  @IsIn(["it", "commercial", "marketing", "hr", "finance", "legal", "other"], {
    message:
      "Area must be one of: IT, Commercial, Marketing, HR, Finance, Legal, Other",
  })
  area: string;

  @IsString()
  @Length(3, 500, {
    message: "Description must be between 3 and 500 characters",
  })
  description: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  keywords: string[];

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
