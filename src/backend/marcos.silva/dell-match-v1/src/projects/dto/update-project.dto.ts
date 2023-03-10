import { IsArray, IsNumber, IsString, IsOptional } from "class-validator";
//////////////////////////////////////////////////////////////////////////////////////

/** data transfer object [Dto] : describe and validate properties of request body */
export class UpdateProjectDto {
  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  department: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsArray()
  @IsOptional()
  keywords: string;

  @IsArray()
  @IsOptional()
  team: string;

  @IsString()
  @IsOptional()
  status: string;

  @IsString()
  @IsOptional()
  applicationDeadline: string;

  @IsString()
  @IsOptional()
  startDate: string;

  @IsString()
  @IsOptional()
  endDate: string;

  @IsNumber()
  @IsOptional()
  headCount: number;

  @IsArray()
  @IsOptional()
  headCountDescription: any;
}
