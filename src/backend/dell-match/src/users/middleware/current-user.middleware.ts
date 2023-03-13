import { NextFunction } from "express";
import { Injectable, NestMiddleware, Req } from "@nestjs/common";

import * as jwt from "jsonwebtoken";

import { UsersService } from "src/users/users.service";

import { throwError } from "src/utils/throwError.util";
//////////////////////////////////////////////////////////////////////////////////////

@Injectable()
export class CurrentUserMiddleware implements NestMiddleware {
  constructor(private readonly usersService: UsersService) {}

  async use(@Req() req: any, res: any, next: NextFunction) {
    try {
      const { id, exp } = jwt.verify(req.session.token, process.env.JWT_SECRET);

      if (Date.now() / 1000 > exp)
        throwError("UnauthorizedException", "Token expired");

      const _user = await this.usersService.findOne(id);
      req.currentUser = _user;
    } catch (error) {
      req.currentUser = null;
    }

    next();
  }
}

// import { User } from "../users.entity";
// import { UsersService } from "src/users/users.service";
// import { Request, Response, NextFunction } from "express";
// import { NestMiddleware, Injectable } from "@nestjs/common";

// declare global {
//   namespace Express {
//     interface Request {
//       currentUser?: User;
//     }
//   }
// }

// @Injectable()
// export class CurrentUserMiddleware implements NestMiddleware {
//   constructor(private usersService: UsersService) {}

//   async use(req: Request, res: Response, next: NextFunction) {
//     const { userId } = req.session || {};

//     if (userId) {
//       const _user = await this.usersService.findOne(userId);
//       req.currentUser = _user;
//     }

//     next();
//   }
// }
