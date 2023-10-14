import { Injectable } from '@nestjs/common';
import { URL } from 'url';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHeath(): { message: string; status: number } {
    let index = 0;
    while (index < 10000000) {
      index++;
    }
    return { message: 'Health is ok ', status: 202 };
  }
  getJenkins(): any {
    return { link: '192.168.0.155:8080', status: 200 };
  }
}
