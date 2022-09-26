import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(): string {
    return 'Ur not supposed to be here!';
  }

  @Get('/run')
  runTask(): Promise<string> {
    return this.appService.run();
  }
}
