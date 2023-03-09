import { IsString, IsEmail } from "class-validator";
//////////////////////////////////////////////////////////////////////////////////////

/** data transfer object [Dto] : describe and validate properties of request body */
export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  jobTitle: string;

  @IsString()
  city: string;

  @IsString()
  country: string;
}
