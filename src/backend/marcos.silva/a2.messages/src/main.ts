import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { MessagesModule } from "./messages/messages.module";
//////////////////////////////////////////////////////////////////////////////////////

/** bootstrap project */
(async function () {
  /** instantiate new project */
  const app = await NestFactory.create(MessagesModule);

  /** wire up global validation pipe with empty validation rules */
  app.useGlobalPipes(new ValidationPipe());

  /** start server listener */
  await app.listen(3000, () => console.log("Server running on port 3000."));
})();
