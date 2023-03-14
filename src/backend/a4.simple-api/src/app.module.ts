const cookieSession = require("cookie-session");

import { TypeOrmModule } from "@nestjs/typeorm";
import { APP_INTERCEPTOR, APP_PIPE } from "@nestjs/core";
import { ConfigModule, ConfigService } from "@nestjs/config";
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
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    UsersModule,
    ReportsModule,
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: "sqlite",
          database: config.get<string>("DB_NAME"),
          entities: [User, Report],
          /** @dev DO NOT use synchronize: true in production */
          synchronize: true,
        };
      },
    }),
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
