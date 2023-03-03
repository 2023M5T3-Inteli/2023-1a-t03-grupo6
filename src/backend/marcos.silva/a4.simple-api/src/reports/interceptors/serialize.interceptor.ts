/** please refer to README.me */
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { plainToInstance } from "class-transformer";
import {
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  UseInterceptors,
} from "@nestjs/common";
//////////////////////////////////////////////////////////////////////////////////////

interface ClassConstructor {
  new (...args: any[]): {};
}

/** custom decorator for Serialization */
export function Serialize(dto: ClassConstructor) {
  return UseInterceptors(new SerializeInterceptor(dto));
}

/** implement interceptor compliant to Abstract Class or Interface */
class SerializeInterceptor implements NestInterceptor {
  constructor(private dto: ClassConstructor) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data: any) => {
        return plainToInstance(this.dto, data, {
          excludeExtraneousValues: true,
        });
      })
    );
  }
}
