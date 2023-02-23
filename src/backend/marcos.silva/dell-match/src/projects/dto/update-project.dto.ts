import { IsString, IsOptional } from "class-validator";
//////////////////////////////////////////////////////////////////////////////////////

/** data transfer object [Dto] : describe and validate properties of request body */
export class UpdateProjectDto {
  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  department: string;
}
