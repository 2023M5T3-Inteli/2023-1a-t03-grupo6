import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppService } from "./app.service";
import { User } from "./users/users.entity";
import { AppController } from "./app.controller";
import { Report } from "./reports/reports.entity";
import { UsersModule } from "./users/users.module";
import { ReportsModule } from "./reports/reports.module";

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
