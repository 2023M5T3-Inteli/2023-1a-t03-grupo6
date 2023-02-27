// /** please refer to README.me */
import {
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Injectable,
} from "@nestjs/common";
import { UsersService } from "../users.service";
//////////////////////////////////////////////////////////////////////////////////////

/** implement interceptor compliant to Abstract Class or Interface */
@Injectable()
export class CurrentUserInterceptor implements NestInterceptor {
  constructor(private UsersService: UsersService) {}

  async intercept(context: ExecutionContext, next: CallHandler) {
    const _req = context.switchToHttp().getRequest();
    _req.currentUser = await this.UsersService.findOne(_req.session.userId);

    return next.handle();
  }
}
