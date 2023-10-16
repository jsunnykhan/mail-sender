import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Injectable } from '@nestjs/common';
import { Inject } from '@nestjs/common/decorators';
import { Cache } from 'cache-manager';
import { RedisService } from './redis/redis.service';
@Injectable()
export class AppService {
  client;
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly redisService: RedisService,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getHeath(): Promise<{ message: string; status: number }> {
    const ping = await this.redisService.ping();
    return { message: 'Health is ok ' + ping, status: 202 };
  }

  async getJenkins(): Promise<any> {
    const value = await this.cacheManager.get('number');
    if (value) return value;
    let index = 0;
    while (index < 10000000000) {
      index++;
    }
    await this.cacheManager.set(
      'number',
      {
        link: '192.168.0.155:8080',
        status: 200,
        value: index,
      },
      1000 * 60,
    );
    return { link: '192.168.0.155:8080', status: 200, value: index };
  }

  postNotification({ message }: { message: string }) {}
}
