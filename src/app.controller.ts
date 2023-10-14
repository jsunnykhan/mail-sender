import { Controller, Get, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/health')
  @HttpCode(202)
  getHealth(): { message: string; status: number } {
    return this.appService.getHeath();
  }
  @Get('/jenkins')
  getJenkins(): any {
    return this.appService.getJenkins();
  }
}
