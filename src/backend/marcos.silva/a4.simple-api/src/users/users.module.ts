import { Module } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { TypeOrmModule } from "@nestjs/typeorm";

import { User } from "./users.entity";
import { AuthService } from "./auth.service";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { GlobalInterceptor } from "src/interceptors/global.interceptor";
import { CurrentUserInterceptor } from "./interceptors/current-user.interceptor";
//////////////////////////////////////////////////////////////////////////////////////

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [
    UsersService,
    AuthService,
    CurrentUserInterceptor,
    { provide: APP_INTERCEPTOR, useClass: GlobalInterceptor },
  ],
})
export class UsersModule {}
