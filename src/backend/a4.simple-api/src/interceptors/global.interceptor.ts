// /** please refer to README.me */
import { NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
//////////////////////////////////////////////////////////////////////////////////////

/** implement interceptor compliant to Abstract Class or Interface */
export class GlobalInterceptor implements NestInterceptor {
  async intercept(context: ExecutionContext, next: CallHandler) {
    const _req = context.switchToHttp().getRequest();
    console.log("GlobalInterceptor: ", _req.session);
    return next.handle();
  }
}
