import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHeath(): { message: string; status: number } {
    return { message: 'Health is ok ', status: 202 };
  }
}
