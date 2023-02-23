import { IsNumber, IsString, IsArray } from "class-validator";
//////////////////////////////////////////////////////////////////////////////////////

/** data transfer object [Dto] : describe and validate properties of request body */
export class CreateProjectDto {
  @IsString()
  title: string;

  @IsString()
  department: string;

  @IsString()
  description: string;

  @IsArray()
  keywords: string[];

  @IsArray()
  team: string[];

  @IsString()
  status: string;

  @IsString()
  applicationDeadline: string;

  @IsString()
  startDate: string;

  @IsString()
  endDate: string;

  @IsNumber()
  headCount: number;

  @IsArray()
  headCountDescription: any;
}
