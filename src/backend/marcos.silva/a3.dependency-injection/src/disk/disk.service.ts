import { Injectable } from "@nestjs/common";
import { PowerService } from "src/power/power.service";
//////////////////////////////////////////////////////////////////////////////////////

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}

  storeData() {
    console.log("Drawing power from PowerService...");
    this.powerService.supplyPower(10);
    return "Data stored to database";
  }
}
