import { IsString, IsEmail } from "class-validator";
//////////////////////////////////////////////////////////////////////////////////////

/** data transfer object [Dto] : describe and validate properties of request body */
export class SignupUserDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
