import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(): string {
    return `Contract Transaction checking: ${process.env.WALLET_ADDRESS}!`;
  }

  @Get('/run')
  runTask(): Promise<string> {
    return this.appService.run();
  }
}
