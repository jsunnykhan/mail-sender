import { Controller, Get, Headers, HttpCode, Post } from '@nestjs/common';
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
  async getHealth(): Promise<{ message: string; status: number }> {
    return await this.appService.getHeath();
  }

  @Get('/jenkins')
  getJenkins(@Headers() header: Headers): any {
    return this.appService.getJenkins();
  }
}
