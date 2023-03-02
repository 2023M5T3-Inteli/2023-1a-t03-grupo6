import { AppModule } from "./app.module";
import { NestFactory } from "@nestjs/core";
//////////////////////////////////////////////////////////////////////////////////////

/** bootstrap project */
(async function () {
  /** instantiate new project */
  const app = await NestFactory.create(AppModule);

  /** start server listener */
  await app.listen(3000, () => console.log("Server running on port 3000."));
})();
