const cookieSession = require("cookie-session");

import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { APP_INTERCEPTOR, APP_PIPE } from "@nestjs/core";
import { Module, ValidationPipe, MiddlewareConsumer } from "@nestjs/common";

import { AppService } from "./app.service";
import { User } from "./users/users.entity";
import { AppController } from "./app.controller";
import { Report } from "./reports/reports.entity";
import { UsersModule } from "./users/users.module";
import { ReportsModule } from "./reports/reports.module";
import { GlobalInterceptor } from "./interceptors/global.interceptor";
//////////////////////////////////////////////////////////////////////////////////////

@Module({
  imports: [
    UsersModule,
    ReportsModule,
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "db.sqlite",
      entities: [User, Report],
      /** @dev DO NOT use synchronize: true in production */
      synchronize: true,
    }),
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_INTERCEPTOR, useClass: GlobalInterceptor },
    /** wire up validation pipe with empty validation rules */
    { provide: APP_PIPE, useValue: new ValidationPipe({ whitelist: true }) },
  ],
})
export class AppModule {
  /** set cookieSession as global middleware */
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(cookieSession({ keys: [process.env.COOKIE_SECRET] }))
      .forRoutes("*");
  }
}
