import { NestFactory } from "@nestjs/core";
import { ComputerModule } from "./computer/computer.module";
//////////////////////////////////////////////////////////////////////////////////////

/** bootstrap project */
(async function () {
  /** instantiate new project */
  const app = await NestFactory.create(ComputerModule);

  /** start server listener */
  await app.listen(3000, () => console.log("Server running on port 3000."));
})();
