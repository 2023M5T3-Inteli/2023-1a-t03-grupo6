/** main.ts : entry point in any nestjs application */
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

(async function () {
  const app = await NestFactory.create(AppModule);
  app.listen(3000, () => console.log("App listening on port 3000"));
})();
