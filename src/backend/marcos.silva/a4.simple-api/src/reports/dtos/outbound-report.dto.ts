import { Expose, Transform } from "class-transformer";
import { User } from "src/users/users.entity";
//////////////////////////////////////////////////////////////////////////////////////

/** default pattern of report data to outbound RESPONSES */
export class OutboundReportDto {
  @Expose()
  id: number;

  @Expose()
  price: number;

  @Expose()
  make: string;

  @Expose()
  model: string;

  @Expose()
  year: number;

  @Expose()
  lng: number;

  @Expose()
  lat: number;

  @Expose()
  mileage: number;

  @Expose()
  approved: boolean;

  @Expose()
  @Transform(({ obj }) => obj.user.id)
  userId: number;
}
