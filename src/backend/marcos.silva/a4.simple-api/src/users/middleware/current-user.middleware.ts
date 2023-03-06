import { User } from "../users.entity";
import { UsersService } from "src/users/users.service";
import { Request, Response, NextFunction } from "express";
import { NestMiddleware, Injectable } from "@nestjs/common";

declare global {
  namespace Express {
    interface Request {
      currentUser?: User;
    }
  }
}

@Injectable()
export class CurrentUserMiddleware implements NestMiddleware {
  constructor(private usersService: UsersService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const { userId } = req.session || {};

    if (userId) {
      const _user = await this.usersService.findOne(userId);
      req.currentUser = _user;
    }

    next();
  }
}
