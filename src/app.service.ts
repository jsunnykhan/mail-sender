import { Injectable } from '@nestjs/common';
import { URL } from 'url';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHeath(): { message: string; status: number } {
    return { message: 'Health is ok ', status: 202 };
  }
  getJenkins(): any {
    return { link: new URL('192.168.0.155:8080'), status: 200 };
  }
}
