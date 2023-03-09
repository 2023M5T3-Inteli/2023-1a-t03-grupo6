import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

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
})
export class AppModule {}
