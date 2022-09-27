import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  statusDto = {
    status: AppService.running ? 'Running' : 'Not Running',
    walletAddress: process.env.WALLET_ADDRESS,
  };
  @Get()
  root(): string {
    return JSON.stringify(this.statusDto);
  }

  @Get('/run')
  runTask(): Promise<string> {
    return this.appService.run();
  }
}
