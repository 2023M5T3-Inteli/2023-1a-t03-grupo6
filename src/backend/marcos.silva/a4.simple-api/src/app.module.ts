import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AppService } from "./app.service";
import { User } from "./users/users.entity";
import { AppController } from "./app.controller";
import { Report } from "./reports/reports.entity";
import { UsersModule } from "./users/users.module";
import { ReportsModule } from "./reports/reports.module";
import { GlobalInterceptor } from "./interceptors/global.interceptor";
//////////////////////////////////////////////////////////////////////////////////////

/** @dev DO NOT use synchronize: true in production */
@Module({
  imports: [
    UsersModule,
    ReportsModule,
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "db.sqlite",
      entities: [User, Report],
      synchronize: true,
    }),
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_INTERCEPTOR, useClass: GlobalInterceptor },
  ],
})
export class AppModule {}
