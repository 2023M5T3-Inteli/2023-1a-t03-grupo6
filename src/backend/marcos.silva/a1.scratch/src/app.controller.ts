import { Controller, Get } from "@nestjs/common";

@Controller("/homepage")
export class AppController {
  @Get("/welcome")
  getWelcome() {
    return "hi there!";
  }

  @Get("/farewell")
  getFarewell() {
    return "Bye there!";
  }
}
