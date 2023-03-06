import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppService } from "./app.service";
import { AppController } from "./app.controller";
import { Project } from "./projects/projects.entity";
import { ProjectsModule } from "./projects/projects.module";
//////////////////////////////////////////////////////////////////////////////////////

/** @dev DO NOT use synchronize in production */
@Module({
  imports: [
    ProjectsModule,
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "db.sqlite",
      entities: [Project],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
