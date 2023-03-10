import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";

import { AppModule } from "./app.module";
//////////////////////////////////////////////////////////////////////////////////////

/** bootstrap project */
(async function () {
  /** instantiate new project */
  const app = await NestFactory.create(AppModule);

  /** set empty global validation pipe; configured at handler level */
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  /** start server listener */
  await app.listen(3000, () => console.log("Server running on port 3000."));
})();