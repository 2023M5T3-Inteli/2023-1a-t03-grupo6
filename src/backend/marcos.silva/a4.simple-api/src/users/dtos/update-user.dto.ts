import { IsEmail, IsString, IsOptional } from "class-validator";
//////////////////////////////////////////////////////////////////////////////////////

/** data transfer object [Dto] : describe and validate properties of request body */
export class UpdateUserDto {
  @IsEmail()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  password: string;
}
