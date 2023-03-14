import { Observable } from "rxjs";
import { CanActivate, ExecutionContext } from "@nestjs/common";
//////////////////////////////////////////////////////////////////////////////////////

export class AdminGuard implements CanActivate {
  canActivate(
    ctx: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const _req = ctx.switchToHttp().getRequest();
    return _req.currentUser.admin;
  }
}
