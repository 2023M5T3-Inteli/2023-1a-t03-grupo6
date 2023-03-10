import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { AppModule } from "./app.module";
//////////////////////////////////////////////////////////////////////////////////////

/** bootstrap project */
(async function () {
  /** instantiate new project */
  const app = await NestFactory.create(AppModule);

  /**
   * wire up global validation pipe with empty validation rules
   * whitelist : security condition to strip out non-essential arguments
   */
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  /** start server listener */
  await app.listen(3000, () => console.log("Server running on port 3000."));
})();
