import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

import { UsersModule } from "./users/users.module";
import { ProjectsModule } from "./projects/projects.module";
//////////////////////////////////////////////////////////////////////////////////////

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),
    UsersModule,
    ProjectsModule,
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: `db/${process.env.NODE_ENV === "dev" ? "db" : "test"}.sqlite`,
      autoLoadEntities: true,
      synchronize: true /** @dev DO NOT use synchronize:true in production */,
    }),
  ],
})
export class AppModule {}
