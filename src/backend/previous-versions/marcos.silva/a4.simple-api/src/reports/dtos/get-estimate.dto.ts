import {
  Min,
  Max,
  IsString,
  IsNumber,
  IsLatitude,
  IsLongitude,
} from "class-validator";
import { Transform } from "class-transformer";
//////////////////////////////////////////////////////////////////////////////////////

/** data transfer object [Dto] : describe and validate properties of request body */
export class GetEstimateDto {
  @IsString()
  make: string;

  @IsString()
  model: string;

  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @Min(1980)
  @Max(new Date().getUTCFullYear())
  year: number;

  @Transform(({ value }) => parseFloat(value))
  @IsLongitude()
  lng: number;

  @Transform(({ value }) => parseFloat(value))
  @IsLatitude()
  lat: number;

  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @Min(0)
  @Max(200000)
  mileage: number;
}
