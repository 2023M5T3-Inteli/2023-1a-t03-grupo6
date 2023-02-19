import { Controller, Get } from "@nestjs/common";
import { CpuService } from "src/cpu/cpu.service";
import { DiskService } from "src/disk/disk.service";
//////////////////////////////////////////////////////////////////////////////////////

@Controller()
export class ComputerController {
  constructor(
    private cpuService: CpuService,
    private diskService: DiskService
  ) {}

  @Get("compute")
  compute() {
    return this.cpuService.compute(10, 20);
  }

  @Get("storeData")
  storeData() {
    return this.diskService.storeData();
  }
}
