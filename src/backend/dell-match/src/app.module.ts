/**
 * WARNING : cookie-session store in the client's browser is not secure.
 */
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MiddlewareConsumer, Module } from "@nestjs/common";

const cookieSession = require("cookie-session");
// import * as cookieSession from "cookie-session";

import { UsersModule } from "./users/users.module";
import { ProjectsModule } from "./projects/projects.module";
//////////////////////////////////////////////////////////////////////////////////////

@Module({
  imports: [
    UsersModule,
    ProjectsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: `db/${process.env.NODE_ENV === "dev" ? "db" : "test"}.sqlite`,
      autoLoadEntities: true,
      synchronize: true /** @dev DO NOT use synchronize:true in production */,
    }),
    // cookieSession({
    //   secret: process.env.SESSION_SECRET,
    //   resave: false,
    //   saveUninitialized: false,
    //   cookie: {
    //     secure: false,
    //     maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    //   },
    // }),
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    const _cookieOptions = {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
      secure: false, // cookie will only be sent on an encrypted connection
    };

    consumer
      .apply(
        cookieSession({
          secret: process.env.SESSION_SECRET,
          resave: false,
          saveUninitialized: false,
          cookie: _cookieOptions,
        })
      )
      .forRoutes("*");
  }
}
