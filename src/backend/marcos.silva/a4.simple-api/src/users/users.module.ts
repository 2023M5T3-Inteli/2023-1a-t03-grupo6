import { Module, MiddlewareConsumer } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
// import { APP_INTERCEPTOR } from "@nestjs/core";

import { User } from "./users.entity";
import { AuthService } from "./auth.service";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { CurrentUserMiddleware } from "./middleware/current-user.middleware";
// import { CurrentUserInterceptor } from "./interceptors/current-user.interceptor";
//////////////////////////////////////////////////////////////////////////////////////

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    UsersService,
    AuthService,
    // { provide: APP_INTERCEPTOR, useClass: CurrentUserInterceptor },
  ],
  controllers: [UsersController],
})
export class UsersModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CurrentUserMiddleware).forRoutes("*");
  }
}
