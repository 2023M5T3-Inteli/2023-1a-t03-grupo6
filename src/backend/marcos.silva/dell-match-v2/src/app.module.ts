import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AppService } from "./app.service";
import { AppController } from "./app.controller";
import { UsersModule } from "./users/users.module";
import { ProjectsModule } from "./projects/projects.module";
//////////////////////////////////////////////////////////////////////////////////////

@Module({
  imports: [
    UsersModule,
    ProjectsModule,
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "db/db.sqlite",
      autoLoadEntities: true,
      /** @dev DO NOT use synchronize:true in production */
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
