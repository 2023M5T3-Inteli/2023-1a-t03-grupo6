import { IsEmail } from "class-validator";
//////////////////////////////////////////////////////////////////////////////////////

/** data transfer object [Dto] : describe and validate properties of request body */
export class SigninDto {
  @IsEmail()
  email: string;
}
