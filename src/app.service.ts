import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHeath(): { message: string } {
    return { message: 'Health is ok ' };
  }
}
