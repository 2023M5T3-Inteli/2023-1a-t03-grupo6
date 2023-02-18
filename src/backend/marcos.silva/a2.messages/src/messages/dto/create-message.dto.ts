import { IsString } from "class-validator";
//////////////////////////////////////////////////////////////////////////////////////

/** data transfer object [Dto] : describe and validate properties of request body */
export class CreateMessageDto {
  @IsString()
  content: string;
}
