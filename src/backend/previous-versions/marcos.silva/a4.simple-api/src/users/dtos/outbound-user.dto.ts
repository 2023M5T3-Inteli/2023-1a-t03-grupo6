import { Expose } from "class-transformer";
//////////////////////////////////////////////////////////////////////////////////////

/** default pattern of user data to outbound RESPONSES */
export class OutboundUserDto {
  @Expose()
  email: string;
}
