/** remember to refer to README.me */
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { plainToInstance } from "class-transformer";
import { NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
//////////////////////////////////////////////////////////////////////////////////////

/** implement interceptor compliant to Abstract Class or Interface */
export class SerializeInterceptor implements NestInterceptor {
  constructor(private dto: any) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log(`First Interceptor: on running before next handler`);

    return next.handle().pipe(
      map((data: any) => {
        console.log(`First Interceptor: on sending response to client`);
        return plainToInstance(this.dto, data, {
          excludeExtraneousValues: true,
        });
      })
    );
  }
}

export class SerializeInterceptor2 implements NestInterceptor {
  constructor(private dto: any) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log(`Second Interceptor: on running before next handler`);

    return next.handle().pipe(
      map((data: any) => {
        console.log(`Second Interceptor: on sending response to client`);
        return plainToInstance(this.dto, data, {
          excludeExtraneousValues: true,
        });
      })
    );
  }
}
