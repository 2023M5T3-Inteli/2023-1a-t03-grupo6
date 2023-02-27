import { createParamDecorator, ExecutionContext } from "@nestjs/common";
//////////////////////////////////////////////////////////////////////////////////////

/** custom decorator for Current User */
export const CurrentUser = createParamDecorator(
  (data: never, ctx: ExecutionContext) => {
    const _req = ctx.switchToHttp().getRequest();
    return _req.currentUser;
  }
);
